<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper register-wrap bg-img">
        <div class="login-content authent-content">
          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="login-userset">
              <div class="login-logo logo-normal">
                <img src="@/assets/img/logo.svg" alt="img" />
              </div>
              <router-link to="/dashboard" class="login-logo logo-white">
                <img src="@/assets/img/logo-white.svg" alt="Img" />
              </router-link>
              <div class="login-userheading">
                <h3>Register</h3>
                <h4>Create New Dreamspos Account</h4>
              </div>
              <div class="mb-3">
                <label class="form-label">Name <span class="text-danger"> *</span></label>
                <div class="input-group">
                  <input type="text" value="" class="form-control border-end-0" />
                  <span class="input-group-text border-start-0">
                    <i class="ti ti-user"></i>
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Email <span class="text-danger"> *</span></label
                >
                <div class="input-group">
                  <Field
                    name="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                  <span class="input-group-text border-start-0">
                    <i class="ti ti-mail"></i>
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Password <span class="text-danger"> *</span></label
                >
                <div class="pass-group">
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control pass-input mt-2"
                    placeholder="Password"
                  />
                  <span @click="toggleShow" class="toggle-password">
                    <i
                      :class="{
                        'fas fa-eye': showPassword,
                        'fas fa-eye-slash': !showPassword,
                      }"
                    ></i>
                  </span>
                  <div class="invalid-feedback">{{ errors.password }}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Confirm Password <span class="text-danger"> *</span></label
                >
                <div class="pass-group">
                  <Field
                    name="confirmpassword"
                    :type="showPassword1 ? 'text' : 'password'"
                    class="form-control pass-input mt-2"
                    placeholder="Confirm Password"
                  />
                  <span @click="toggleShow1" class="toggle-password">
                    <i
                      :class="{
                        'fas fa-eye': showPassword1,
                        'fas fa-eye-slash': !showPassword1,
                      }"
                    ></i>
                  </span>
                  <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                  <div class="emailshow text-danger" id="confirmpassword"></div>
                </div>
              </div>
              <div class="form-login authentication-check">
                <div class="row">
                  <div class="col-sm-8">
                    <div class="custom-control custom-checkbox justify-content-start">
                      <div class="custom-control custom-checkbox">
                        <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>I agree to the
                          <a href="#" class="text-primary">Terms & Privacy</a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-login">
                <button type="submit" class="btn btn-login">Sign Up</button>
              </div>
              <div class="signinform">
                <h4>
                  Already have an account ?
                  <router-link to="/signin" class="hover-a">Sign In Instead</router-link>
                </h4>
              </div>
              <div class="form-setlogin or-text">
                <h4>OR</h4>
              </div>
              <div class="mt-2">
                <div class="d-flex align-items-center justify-content-center flex-wrap">
                  <div class="text-center me-2 flex-fill">
                    <a
                      href="javascript:void(0);"
                      class="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                    >
                      <img
                        class="img-fluid m-1"
                        src="@/assets/img/icons/facebook-logo.svg"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div class="text-center me-2 flex-fill">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white br-10 p-2 border d-flex align-items-center justify-content-center"
                    >
                      <img
                        class="img-fluid m-1"
                        src="@/assets/img/icons/google-logo.svg"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div class="text-center flex-fill">
                    <a
                      href="javascript:void(0);"
                      class="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                    >
                      <img
                        class="img-fluid m-1"
                        src="@/assets/img/icons/apple-logo.svg"
                        alt="Apple"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="my-4 d-flex justify-content-center align-items-center copyright-text"
              >
                <p>Copyright &copy; 2025 DreamsPOS</p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
export default {
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      password: null,
    };
  },
  components: {
    Form,
    Field,
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel1() {
      return this.showPassword1 ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const showPassword = ref(false);
    // eslint-disable-next-line no-unused-vars
    const emailError = ref("");
    // eslint-disable-next-line no-unused-vars
    const passwordError = ref("");

    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });

    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML = "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching";
      }
    };

    return {
      schema,
      onSubmit,
    };
  },
};
</script>
