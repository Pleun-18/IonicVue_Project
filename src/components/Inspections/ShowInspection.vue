<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <div class="heading" style="border-bottom: 2px solid grey;">
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>
           <h2>{{ inspection.location }}</h2>
           <p>{{ inspection.date }}</p>
        </div>
        <div class="badges">
          <div>
            <p>Inspection type:</p>
            <ion-badge>{{ inspection.name }}</ion-badge>
          </div>
          <div>
            <p>Cause of:</p>
            <ion-badge>{{ inspection.type }}</ion-badge>
          </div>
        </div>
        <div class="describeComment">
          <h3>Description: </h3>
          <p>{{ inspection.description }}</p>
        </div>
        <div>
          <h3>Comments: </h3>
          <p>{{ inspection.comment }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ShowInspection',
    props: ['inspection'],
    methods: {
      close() {
        this.$emit('close');
      },
      pushId() {
        this.$emit('pushId');
      }
    },
})
</script>

<style scoped>

  h3 {
    line-height: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .describeComment {
    margin: 0;
    padding: 0;
  }
  .describeComment p{
    margin: 0;
    padding: 0;
  }

  .heading p {
    line-height: 0;
  }

  .badges p {
    line-height: 0;
  }

  .badges {
    display: flex;
    margin: 0;
  }

  .badges div {
    margin-right: 25px;
  }

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
    height: 750px;
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
    padding: 15px;
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
    float: right;
    border: none;
    font-size: 30px;
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