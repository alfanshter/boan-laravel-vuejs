<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h1 class="text-center">Login</h1>
                        <div
                            v-if="validationErrors.length"
                            class="notification is-danger is-light"
                        >
                            <button
                                @click="resetError()"
                                class="delete"
                            ></button>
                            <div class="content">
                                Please resolve the following error(s) before
                                proceeding.
                                <ul style="margin-top: 0.3em; margin-left: 1em">
                                    <li
                                        v-for="(
                                            error, index
                                        ) in validationErrors"
                                        :key="`error-${index}`"
                                        v-html="error"
                                    />
                                </ul>
                            </div>
                        </div>
                        <div class="text-center">
                            <i
                                class="fas fa-user-circle"
                                style="font-size: 9em"
                            ></i>

                            <form class="mt-5">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon1"
                                            ><i class="fa fa-user"></i
                                        ></span>
                                    </div>
                                    <input
                                        v-model="username"
                                        autocomplete="username"
                                        type="text"
                                        name="username"
                                        class="form-control"
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon2"
                                            ><i class="fa fa-lock"></i
                                        ></span>
                                    </div>
                                    <input
                                        v-model="password"
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon2"
                                    />
                                </div>
                                <button
                                    @click.prevent="signIn()"
                                    class="btn btn-dark btn-block"
                                >
                                    <i class="fa fa-sign-in-alt"></i> Login
                                </button>
                                <hr />
                                <a
                                    href="?page=register"
                                    class="btn btn-secondary btn-block"
                                >
                                    <i class="fa fa-user-plus"></i> Buat Akun
                                    baru</a
                                >
                            </form>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="text-center">
                            <i class="fa fa-copyright"></i>
                            <a href="?page=beranda" class="text-dark"
                                >E Laporz</a
                            >
                            | Kelompok 7
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: null,
            password: null,
            validationErrors: [],
        };
    },
    methods: {
        resetError() {
            this.validationErrors = [];
        },
        validate() {
            this.resetError();

            if (!this.username) {
                this.validationErrors.push(
                    "<strong>E-mail</strong> cannot be empty."
                );
            }
            if (/.+@.+/.test(this.usrename) != true) {
                this.validationErrors.push(
                    "<strong>E-mail</strong> must be valid."
                );
            }
            // password validation
            if (!this.password) {
                this.validationErrors.push(
                    "<strong>Password</strong> cannot be empty"
                );
            }
            if (/.{6,}/.test(this.password) != true) {
                this.validationErrors.push(
                    "<strong>Password</strong> must be at least 6 characters long"
                );
            }
            // when valid then sign in
            if (this.validationErrors.length <= 0) {
                this.signIn();
            }
        },

        signIn() {
            console.log("Sign IN ", this.username, this.password);
        },
    },
};
</script>
