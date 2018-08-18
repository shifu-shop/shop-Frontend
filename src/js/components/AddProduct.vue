<template>
    <div>
        <form class="section form-inline" @submit.prevent="addProduct">
            <header class="col-4">
                <div class="product-header-img-wrap form-group">
                    <img :src="newProduct.cropImg" class="product-header-img-wrap-selected" alt="Source image" data-toggle="modal" data-target="#exampleModalCenter" v-if="newProduct.cropImg">
                    <div class="product-header-img-wrap-not-selected" data-toggle="modal" data-target="#exampleModalCenter" v-else>Please select image</div>
                </div>
            </header>
            <article class="col-8 form-group">
                <input type="text" placeholder="Title" class="col-12 form-control" v-model="newProduct.title" required>
                <textarea type="text" placeholder="Description" class="col-12 form-control" v-model="newProduct.description" required></textarea>
                <input type="number" placeholder="Price $" class="form-control col-3" v-model="newProduct.price" required>
                <input type="submit" class="btn btn-custom-green" value="Save">
            </article>
        </form>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Please select image</h5>
                    </div>
                    <div class="modal-body">
                        <input type="file" name="image" accept="image/*" class="form-control" @change="setImage" required>
                        <vue-cropper v-show="newProduct.imgSrc"
                                ref='cropper'
                                :guides="false"
                                :view-mode="2"
                                drag-mode="crop"
                                :auto-crop-area="0.5"
                                :min-container-width="250"
                                :min-container-height="250"
                                :background="true"
                                :rotatable="true"
                                :src="newProduct.imgSrc"
                                :aspectRatio="1/1"
                                alt="Source Image"
                                :autoCrop="true"
                                :img-style="{ 'width': '400px', 'height': '300px' }">
                        </vue-cropper>
                    </div>
                    <div class="modal-footer" v-if="newProduct.imgSrc">
                        <button @click="cropImage" class="btn btn-custom-green" data-dismiss="modal">Crop</button>
                        <button @click="rotate" class="btn btn-custom-green">Rotate</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs';
    export default {
        name: "AddProduct",
        components: {
            VueCropper
        },
        data() {
            return {
                newProduct: {
                    title: '',
                    description: '',
                    price: '',
                    imgSrc: '',
                    cropImg: '',
                }
            }
        },
        methods: {
            addProduct() {
                this.$store.dispatch('products/add', this.newProduct);
                this.newProduct = {
                    title: '',
                    description: '',
                    price: '',
                    imgSrc: '',
                    cropImg: '',
                }
            },
            setImage(e) {
                const file = e.target.files[0];
                if (!file.type.includes('image/')) {
                    alert('Please select an image file');
                    return;
                }
                if (typeof FileReader === 'function') {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        this.newProduct.imgSrc = event.target.result;
                        console.log(this.$refs)
                        this.$refs.cropper.replace(event.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert('Sorry, FileReader API not supported');
                }
            },
            cropImage() {
                this.newProduct.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            rotate() {
                this.$refs.cropper.rotate(90);
            },
        },
    }
</script>

<style scoped>
    .product-header-img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product-header-img-wrap-selected {
        width: 200px;
        height: 200px;
        border-radius: 5%;
        margin: auto;
        display: block;
        cursor: pointer;
    }

    .product-header-img-wrap-not-selected {
        width: 200px;
        height: 200px;
        border: 1px solid rgb(227, 228, 232);
        border-radius: 5%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        display: flex;
        color: deepskyblue;
        cursor: pointer;
    }
</style>