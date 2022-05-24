<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
          
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>

        <h2  @click="test">{{ inspection.location }}</h2>
        <div>
          <ion-chip>{{ inspection.name }}</ion-chip>
          <ion-chip>{{ inspection.type }}</ion-chip>
        </div>
        
        <ul class="list-group">
            <li class="list-group-item">{{ inspection.description}}</li>
            <li class="list-group-item">{{ inspection.comment}}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalList',
    props: ['inspection'],
    methods: {
      close() {
        this.$emit('close');
      },
      pushId() {
        this.$emit('pushId');
      }, 
      test(){
        console.log("hallo" + this)
      }
    },
})
</script>

<style scoped>
  .list-group {
    text-align: left;
    list-style-type: circle;
  }

  .modal-backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    width: 320px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 2px 2px 15px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    float: right;
    margin-inline-start: 10px;
    border: none;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>