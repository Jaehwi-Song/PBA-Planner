<template>
  <v-container>
    <v-list style="display:inline;" v-for="img in imgs" :key="img.id"><img :src="img.url" width="14%"></v-list>
    <v-row>
      <v-col cols="12" class="text-center">
        <video ref="rVideo" class="style_video"></video>
      </v-col>
      <v-col cols="12" class="mt-5 text-center">
        <p>iOS는 지원하지 않습니다.</p>
      </v-col>
    </v-row>
    <div class="text-center my-3">
      <v-btn v-if="!this.bIsWait" color="red" fab dark bottom @click="fnCameraCapture()">
        <v-icon>camera</v-icon>
      </v-btn>
      <v-progress-circular v-if="this.bIsWait" :size="50" indeterminate color="grey"></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
  import {
    oStorage,
    oTodosinDB
  } from '@/datasources/firebase'
  export default {
    
    name: 'App',
    firebase: {
        oTodos: oTodosinDB
    },
    data() {
      return {
        imgs:[
          {url: require("./imgs/loopy.png")},
          {url: require("./imgs/loopy2.png")},
          {url: require("./imgs/loopy3.png")},
          {url: require("./imgs/loopy4.png")},
          {url: require("./imgs/loopy5.png")},
          {url: require("./imgs/loopy6.png")},
          {url: require("./imgs/loopy7.png")}
        ],
        oTodos: [],
        oVideoStream: null,
        itemPic: null,
        bIsWait: false
      }
    },
    created() {
      const itemID = this.$route.params.p_id
      this.itemPic = this.oTodos.find(item => item['.key'] === itemID)
    },
    mounted() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(pVideoStream => {
        this.oVideoStream = pVideoStream
        this.$refs.rVideo.srcObject = pVideoStream
        this.$refs.rVideo.play()
      }).catch(function (err) {
        console.log(err)
      })
    },
    destroyed() {
      const oTrack = this.oVideoStream.getTracks()
      oTrack.map(pTrack => pTrack.stop())
    },
    methods: {
      fnCameraCapture() {
        const sItem = this.itemPic
        this.bIsWait = true
        const oVideoTrack = this.oVideoStream.getVideoTracks()[0]
        let oCapturedImage = new window.ImageCapture(oVideoTrack)
        const options = {
          imageHeight: 359,
          imageWidth: 640,
          fillLightMode: 'off'
        };
        const self = this
        return oCapturedImage.takePhoto(options).then(pImageData => {
          const oTrack = self.oVideoStream.getTracks()
          oTrack.map(pTrack => pTrack.stop())
          console.log('캡처: ' + pImageData.type + ', ' + pImageData.size + '바이트');
          const nID = new Date().toISOString()
          let uploadTask = oStorage.ref('images').child('pic' + nID).put(pImageData)
          uploadTask.on('state_changed', function (snapshot) {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('업로드: ' + progress + '% 완료', snapshot.state);
          }, function (error) {
            console.log(error)
          }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              console.log('업로드URL:', downloadURL);
              oTodosinDB.child(sItem['.key']).update({
                b_completed: true,
                filename: 'pic' + nID,
                url: downloadURL
              })
                .then(self.$router.push('/'))
            });
          });
        })
      }
    }
  }
</script>

<style>
  .style_video {
    width: 100%
  }
</style>