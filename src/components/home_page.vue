<template>
    <v-container>
          <v-row my-5>
            <v-col cols="8" offset="1">
              <v-text-field label="추가해주세요" color="pink lighten-4" autofocus v-model="sTodoTitle">
              </v-text-field>
            </v-col>
            <v-col cols="2" my-2>
              <v-btn fab max-height="50px" max-width="50px" color="pink lighten-4" dark @click="fnSubmitTodo()">
                <v-icon>add</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-list name="slide-fade" style="display:inline;" v-for="img in imgs" :key="img.id"><img :src="img.url" width="14%"></v-list>
                  <transition name="slide-fade" two-line v-for="item in oTodos" :key="item.key">
                    <v-card class="listtype" flat color="pink lighten-5" v-if="!item.b_edit">
                      <v-img :src="item.url" v-if="item.url !== ''" contain height="200px"></v-img>
                        <v-list-item class="py-2">
                          <v-list-item-action>
                            <v-checkbox v-model="item.b_completed" disabled='disabled'></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title :class="{'style_completed' :item.b_completed}"><h2>{{ item.todo_title }}</h2><br>
                          </v-list-item-title>
                          <v-list-item-title :class="{'style_completed_comment' :item.b_completed}">코멘트:ㅤ{{ item.todo_comment }}<br><br><br>
                            </v-list-item-title>
                          <v-list-item-subtitle class="mt-2">
                            <v-icon class="pointer" @click="fnSetEditTodo(item['.key'])">create</v-icon>
                            &nbsp;+commentㅤㅤ
                            <v-icon class="pointer" @click="fnRemoveTodo(item['.key'])">delete</v-icon>
                            &nbsp;-deleteㅤㅤ
                            <v-icon class="pointer" @click="fnAddPhoto(item['.key'])">camera_alt</v-icon>
                            &nbsp;+picture
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                    <v-card v-else dark>
                      <v-list-item class="py-2">
                        <v-list-item-action>
                          <v-checkbox v-model="item.b_completed" disabled='disabled'></v-checkbox>
                        </v-list-item-action>
                        <v-card-text>
                          <!--<v-text-field autofocus clearable v-model="item.todo_title"></v-text-field>--원 코드에서 날림--> 
                          <v-text-field label="comment" v-model="item.todo_comment"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-icon class="pointer" @click="fnSaveEdit(item)">save</v-icon>
                          <v-icon class="pointer" @click="fnCancelEdit(item['.key'])">cancel</v-icon>
                        </v-card-actions>
                      </v-list-item>
                    </v-card>
                  </transition>
              <v-list style="display:inline;" v-for="img in imgs" :key="img.id"><img :src="img.url" width="14%"></v-list>
              shout out to 잔망루피!
            </v-col>
          </v-row>
        </v-container>
</template>
<script>
  import {
    oTodosinDB,
    oStorage
  } from '@/datasources/firebase'
  export default {
    name: 'App', 
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
        sTodoTitle: '',
        sFilename: '',
        sUrl: '',
        sComment:''
      }
    },
    firebase: {
      oTodos: oTodosinDB
    },
    methods: {
      fnSubmitTodo() {
        oTodosinDB.push({
          todo_title: this.sTodoTitle,
          b_completed: false,
          b_edit: false,
          filename: this.sFilename,
          todo_comment: this.sComment,
          url: this.sUrl
        })
        this.sTodoTitle = ''
        this.sFilename = ''
        this.sUrl = ''
      },
      fnRemoveTodo(pKey) {
        const pItem = this.oTodos.find(item => item['.key'] === pKey)
        if (pItem['filename'] !== '')
                oStorage.ref('images').child(pItem['filename']).delete()
        oTodosinDB.child(pKey).remove()
      },
      fnSetEditTodo(pKey) {
        oTodosinDB.child(pKey).update({
          b_edit: true
        })
      },
      fnCancelEdit(pKey) {
        oTodosinDB.child(pKey).update({
          b_edit: false
        })
      },
      fnSaveEdit(pItem) {
        const sKey = pItem['.key']
        oTodosinDB.child(sKey).update({
          todo_title: pItem.todo_title,
          todo_comment: pItem.todo_comment,
          b_completed: pItem.b_completed,
          b_edit: false
        })
      },
      fnAddPhoto(pID) {
          this.$router.push({
              name: 'camera_page',
              params: { p_id: pID }
          })
      }
    }
  }
</script>
<style>
  .listtype {
    margin: 10px;
  }
  .pointer{
    cursor: pointer;
  }
  .cTitle{
    text-align: center;
  }
  .style_completed {
    color: pink;
    text-decoration: underline;
  }
  .style_completed_comment{

    text-decoration: underline;
    background-color: white;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>