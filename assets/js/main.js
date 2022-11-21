function getUserLogin() {
  const user = localStorage.getItem("user-login");
  return JSON.parse(user);
}
function storeDataUser(user) {
  localStorage.setItem("user-login", JSON.stringify(user));
}
function getDataUsers() {
  const userList = localStorage.getItem("users");
  return JSON.parse(userList);
}
// isi data user dari local storage
const users = getDataUsers();
(function () {
  //cek apakah ada user yang login
  const user = getUserLogin();
  // jika tidak ada user yang login maka user harus login
  if (!user && window.location.pathname !== "/login.html") {
    if (window.location.pathname !== "/register.html") {
      window.location.href = "/login.html";
    }
  } else if (
    user &&
    (window.location.pathname === "/login.html" ||
      window.location.pathname === "/register.html")
  ) {
    window.location.href = "/index.html";
  }
  //Ganti nama pada navbar
  const profileName = document.getElementById("profile-name");
  if (profileName) {
    profileName.innerHTML = user?.name ?? "Misrudin";
  }

  // Menampilkan Copyright pada footer serta value dari tahun yang otomatis deteksi tahun saat ini
  const copyYear = document.getElementById("copyright");
  if (copyYear) {
    const currentYear = new Date().getFullYear();
    copyYear.innerHTML = `Created by Misrudin | &copy; ${currentYear}`;
  }

  // Generate 10 artikel kemudian di embed ke html
  const articlesContainer = document.getElementById("articles");
  if (articlesContainer) {
    let articles = "";
    for (let i = 0; i < 10; i++) {
      articles += `
            <article class="overflow-hidden ${
              i !== 9 && "mb-2 border-bottom pb-2"
            }">
                <div class="row g-3">
                  <div class="col-md-4">
                    <img
                      src="https://picsum.photos/id/${i * 10}/180/180"
                      class="rounded-1 w-100"
                      alt="Article"
                      onerror="if (this.src != 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=') this.src = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=';"
                      loading="lazy"
                    >
                  </div>
                  <div class="col-md-8">
                    <div class="py-0 pe-2">
                      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sint.</h4>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio pariatur repudiandae, earum facere nihil. Provident a, sequi rem nostrum nesciunt quas non autem magnam quaerat. Exercitationem soluta voluptas dignissimos accusamus, quo eveniet, quae, nulla quam quod tenetur cupiditate sint!</p>
                      <button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tombol ini cuma hiasan.">Read More &raquo;</button>
                    </div>
                  </div>
                </div>
            </article>
      `;
    }
    const title = `<h4 class="mb-0">My Article</h4>`;
    const description = `<p class="text-black-50 mb-4">Artikel ini hanya dummy saja, text dummy yang saya buat menggunakan vscode</p>`;
    articlesContainer.innerHTML = `${title}${description}${articles}`;
  }

  // Generate 10 artikel terbaru kemudian di embed ke html
  const newArticle = document.getElementById("new-article");
  if (newArticle) {
    let tempNewArticles = "";
    for (let i = 0; i < 10; i++) {
      tempNewArticles += `
            <article class="overflow-hidden ${
              i !== 9 && "mb-2 border-bottom pb-2"
            }">
                <div class="row g-3">
                  <div class="col-3">
                    <img
                      src="https://picsum.photos/id/${i * 5}/50/50"
                      class="rounded-1 w-100"
                      alt="Article"
                      onerror="if (this.src != 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=') this.src = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=';"
                      loading="lazy"
                    >
                  </div>
                  <div class="col-9">
                    <div class="py-0 pe-2">
                      <h6 class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
                      <small class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                    </div>
                  </div>
                </div>
            </article>
      `;
    }
    newArticle.innerHTML = tempNewArticles;
  }

  // Generate 50 artikel kemudian di embed ke html
  const articleList = document.getElementById("articles-all");
  if (articleList) {
    let articles = "";
    for (let i = 0; i < 50; i++) {
      articles += `
            <article class="overflow-hidden ${
              i !== 9 && "mb-2 border-bottom pb-2"
            }">
                <div class="row g-3">
                  <div class="col-md-4">
                    <img
                      src="https://picsum.photos/id/${i * 10}/180/180"
                      class="rounded-1 w-100"
                      alt="Article"
                      onerror="if (this.src != 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=') this.src = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=';"
                      loading="lazy"
                    >
                  </div>
                  <div class="col-md-8">
                    <div class="py-0 pe-2">
                      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sint.</h4>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio pariatur repudiandae, earum facere nihil. Provident a, sequi rem nostrum nesciunt quas non autem magnam quaerat. Exercitationem soluta voluptas dignissimos accusamus, quo eveniet, quae, nulla quam quod tenetur cupiditate sint!</p>
                      <button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tombol ini cuma hiasan.">Read More &raquo;</button>
                    </div>
                  </div>
                </div>
            </article>
      `;
    }
    const title = `<h4 class="mb-0">Baca Artikel Terbaru dari Ekipa</h4>`;
    const description = `<p class="text-black-50 mb-4">Artikel ini hanya dummy saja, text dummy yang saya buat menggunakan vscode</p>`;
    articleList.innerHTML = `${title}${description}${articles}`;
  }

  // Generate 12 produk kemudian di embed ke html
  const productsContainer = document.getElementById("products");
  if (productsContainer) {
    let tempProducts = "";
    for (let i = 0; i < 12; i++) {
      tempProducts += `
                  <a href="#" class="w-100 bg-white border-1 rounded-1 overflow-hidden p-0 product">
                    <img
                      src="https://picsum.photos/id/${i * 3}/180/180"
                      alt="Product"
                      class="w-100"
                      onerror="if (this.src != 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=') this.src = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=';"
                      loading="lazy"
                    >
                    <div class="p-2">
                      <h6 class="text-dark"">Lorem ipsum dolor sit amet.</h6>
                      <p class="m-0 text-dark"">Rp100.000</p>
                      <p class="m-0 text-dark"">Eiger</p>
                    </div>
                  </a>
         `;
    }
    productsContainer.innerHTML = tempProducts;
  }

  // Generate 150 produk kemudian di embed ke html index
  const productsListAll = document.getElementById("products-all");
  if (productsListAll) {
    let tempProducts = "";
    for (let i = 0; i < 150; i++) {
      tempProducts += `
                       <a href="#" class="w-100 bg-white border-1 rounded-1 overflow-hidden p-0 product">
                        <img
                          src="https://picsum.photos/id/${i}/180/180"
                          alt="Product" class="w-100"
                          onerror="if (this.src != 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=') this.src = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=';"
                          loading="lazy"
                          >
                         <div class="p-2">
                           <h6 class="text-dark"">Lorem ipsum dolor sit amet.</h6>
                           <p class="m-0 text-dark"">Rp100.000</p>
                           <p class="m-0 text-dark"">Eiger</p>
                         </div>
                       </a>
            `;
    }
    productsListAll.innerHTML = tempProducts;
  }
})();

// Initialize tooltip bootstrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Menambah action submit pada form login
const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", login);
}

// handle saat user klik tombol login
function login(e) {
  e.preventDefault();
  const data = new FormData(formLogin);
  const email = data.get("email");
  const password = data.get("password");
  const user = users?.find((e) => e.email === email);
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const alert = document.getElementById("alert");
  // handle ketika input kosong
  if ((email === "") | (password === "")) {
    alert.classList.remove("d-none");
    alert.innerHTML = "Silahkan masukan email dan password anda!";
    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    return;
  }
  // handle ketika user tidak ditemukan
  if (!user) {
    alert.classList.remove("d-none");
    alert.innerHTML = "Email tidak ditemukan!";
    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    return;
  }
  // handle ketika password tidak sesuai
  if (user.password !== password) {
    alert.classList.remove("d-none");
    alert.innerHTML = "Password yang anda masukan salah!";
    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    return;
  }

  // login berhasil
  alert.classList.add("d-none");
  alert.innerHTML = "";
  inputEmail.classList.remove("is-invalid");
  inputPassword.classList.remove("is-invalid");
  // menyimpan credential user ke localstorage
  storeDataUser(user);
  // pindah halaman ke home
  window.location.href = "/index.html";
}

// handle ketika user logout
function logout() {
  // clear credential user
  localStorage.removeItem("user-login");
  // pindah halaman ke login
  window.location.href = "/login.html";
}

// menambah action pada form register
const formRegister = document.getElementById("form-register");
if (formRegister) {
  formRegister.addEventListener("submit", register);
}

// handle ketika user klik daftar
function register(e) {
  // prevent reload ketika form di submit
  e.preventDefault();
  const data = new FormData(formRegister);
  const fullName = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const user = users?.find((e) => e.email === email);
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const alert = document.getElementById("alert");
  // handle ketika input kosong
  if ((fullName === "") | (email === "") | (password === "")) {
    alert.classList.remove("d-none");
    alert.innerHTML = "Silahkan isi data diri anda!";
    inputName.classList.add("is-invalid");
    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    return;
  }
  // handle ketika user sudah terdaftar
  if (user) {
    alert.classList.remove("d-none");
    alert.innerHTML = "Email sudah terdaftar!";
    inputName.classList.add("is-invalid");
    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    return;
  }
  // membuat user baru
  const newUser = {
    name: fullName,
    email: email,
    password: password,
  };
  alert.classList.add("d-none");
  alert.innerHTML = "";
  inputName.classList.remove("is-invalid");
  inputEmail.classList.remove("is-invalid");
  inputPassword.classList.remove("is-invalid");
  const allUser = getDataUsers();
  const tempUsers = allUser ? [...allUser] : [];
  tempUsers.push(newUser);
  // menyimpan user ke localstorage browser
  localStorage.setItem("users", JSON.stringify(tempUsers));
  // menyimpan credential user ke localstorage
  storeDataUser(newUser);
  // pindah halaman ke home
  window.location.href = "/index.html";
}
