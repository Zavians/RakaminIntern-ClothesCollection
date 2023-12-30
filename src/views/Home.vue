<template>
  <main class="home-page">
    <!-- Desain Carousel -->
    <div class="container">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style="h-50 w-50">
            <img
              src="https://i.pinimg.com/originals/9a/71/6f/9a716f90fc2e24079b8960168d5ea089.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-kategori">Man Section</h5>
              <p>"Tailored for Triumph, Styled for Success."</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://i5.walmartimages.com/dfw/63fd9f59-f2e7/db0f9656-9564-4e0c-8bf0-d4a8bdd8cb64/v1/womens-clothing.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-kategori">Woman Section</h5>
              <p>"Dress Like You're Already Famous."</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-kategori">Unavailable Product</h5>
              <p>"Get Ready for Something Amazing!"</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- Desain tulisan Tengah -->
    <div class="mid-text">
      <h2>Selamat Datang</h2>
      <div>
        <p>"Temukan, Tentukan, Berbusana: Petualangan Gaya Dimulai Di Sini."</p>
      </div>
    </div>

    <!-- Main Desain Home -->
    <div class="container">
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462401/item/idgoods_09_462401.jpg?width=750"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title judul-kategori">
              <a href="/collection" class="btn text-kategori">Men Section</a>
            </h5>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img
            src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461147/item/idgoods_53_461147.jpg?width=750"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title judul-kategori">
              <a href="/collection" class="btn text-kategori">Woman Section</a>
            </h5>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img
            src="https://kabartangerang.com/assets/uploads/2023/01/giordano_giordano_men-s_classic_shirt_-_kemeja_pria_lengan_panjang_Cara-Memilih-Baju-Pria-Berkualitas-Baik-Dengan-Bahan-yang-Nyaman.webp"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title judul-kategori">
              <a href="/collection" class="btn text-kategori">Unavailable Product</a>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  background-image: linear-gradient(#fffbf5, #fffbf5);
  height: 140vh;
}

.mid-text {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.mid-text a {
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  display: flex;
}

.containers {
  background-color: var(--blackone);
}



.carousel-item {
  object-fit: fill;
  height: 35vh;
  width: 100%;
}

.card-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); 
}

.card {
  margin: 10px;
}

.judul-kategori {
  margin-top: 40%;
  margin-bottom: 50%;
  text-align: center;
}

.text-kategori {
  font-size: 3rem;
  color: var(--whitetulang);
  font-family: Arial, Helvetica, sans-serif;
}
</style>

