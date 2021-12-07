<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h1 class="text-center">Register Akun Baru</h1>
                        <h2 class="text-center">E Service</h2>

                        <div class="text-center">
                            <i
                                class="fas fa-user-plus"
                                style="font-size: 9em"
                            ></i>

                            <form class="mt-5 text-left">
                                <div class="form-group">
                                    <label for="nama">Nama</label>
                                    <input
                                        v-model="nama"
                                        autocomplete="nama"
                                        type="text"
                                        class="form-control"
                                        placeholder="Masukan Nama"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="username">Email</label>
                                    <input
                                        v-model="email"
                                        autocomplete="email"
                                        type="text"
                                        class="form-control"
                                        placeholder="Masukan Username"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                        v-model="password"
                                        autocomplete="password"
                                        type="password"
                                        class="form-control"
                                        placeholder="Masukan Password"
                                    />
                                </div>

                                <!-- <div class="form-group">
                                    <label for="Foto">Foto</label>
                                    <div class="custom-file">
                                        <input
                                            type="file"
                                            class="custom-file-input"
                                            id="form-file"
                                            name="foto"
                                        />
                                        <label
                                            class="custom-file-label"
                                            for="customFile"
                                            >Pilih Foto</label
                                        >
                                    </div>
                                    <img
                                        id="img-preview"
                                        width="300px"
                                        class="img-thumbnail img-fluid mb-2"
                                        alt=""
                                    />
                                </div> -->

                                <button
                                    @click.prevent="signUp()"
                                    class="btn btn-dark btn-block"
                                >
                                    <i class="fa fa-user-plus"></i> Register
                                </button>
                                <hr />
                                <a
                                    href="?page=login"
                                    class="btn btn-secondary btn-block"
                                >
                                    <i class="fa fa-user"></i> Sudah punya
                                    Akun?</a
                                >
                            </form>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="text-center">
                            <i class="fa fa-copyright"></i>
                            <a href="?page=beranda" class="text-dark"
                                >E Service</a
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
            nama: null,
            email: null,
            password: null,
        };
    },
    methods: {
        signUp() {
            // @TODO signUn logic will come here
            console.log("sign up", this.nama, this.email, this.password);
        },
    },
};
</script>
