<template>
  <n-card title="" class="" style="margin-bottom: 16px">
    <n-tabs type="line" class="card" animated>
      <n-tab-pane name="Home" tab="Home">
       <n-card>
    <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
    
      <n-tab-pane name="signin"  tab="Sign in">
        <n-card title="Login" class="n-card2" hoverable>
        <n-form>
          <n-form-item-row label="Username">
            <n-input type="text" style="text-align:left;" placeholder="Username"/>
          </n-form-item-row>
          <n-form-item-row label="Password">
            <n-input type="text" style="text-align:left;" placeholder="Password"/>
          </n-form-item-row>
        </n-form>
        
        <n-button type="primary" block secondary strong>
          Sign In
        </n-button>
        </n-card>
      </n-tab-pane>

      <n-tab-pane name="signup" tab="Sign up">
        <n-card title="Register" class="n-card2" hoverable>
        <n-form>
          <n-form-item-row label="Username">
            <n-input type="text" style="text-align:left;" placeholder="Username"/>
          </n-form-item-row>
          <n-form-item-row label="Password">
            <n-input type="text" style="text-align:left;" placeholder="Password"/>
          </n-form-item-row>
          <n-form-item-row label="Retry Password">
            <n-input type="text" style="text-align:left;" placeholder="Retry Password"/>
          </n-form-item-row>
          <n-form-item-row label="Email">
            <n-input type="text" style="text-align:left;" placeholder="Email"/>
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          Sign up
        </n-button>
        </n-card>
      </n-tab-pane>

      <n-tab-pane name="forgot" tab="Forgot Password">
        <n-card title="Forgot Password" class="n-card2" hoverable>
        <n-form>
          <n-form-item-row label="Username">
            <n-input type="text" style="text-align:left;" placeholder="Username"/>
          </n-form-item-row>
          <n-form-item-row label="Email">
            <n-input type="text" style="text-align:left;" placeholder="Email"/>
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          Send
        </n-button>
        </n-card>
      </n-tab-pane>
   
    </n-tabs>
  </n-card>
      </n-tab-pane>
      <n-tab-pane name="Profile" tab="Profile">
        
      </n-tab-pane>
      <n-tab-pane name="About" tab="About">

      </n-tab-pane>
    </n-tabs>
  </n-card>
 
</template>

<style scoped>

.card-tabs {
  margin: auto;
  display: grid;
  justify-content: center;
  

}

</style>
<style scoped>
.n-card2 {
  width: 400px;
}
</style>
<script>
import { defineComponent, ref } from "vue";
import {  } from 'naive-ui'
export default defineComponent({
  components: {    
    
 
    },
  setup() {
    return {
      value: ref(null)
    };
  }
});
</script>

