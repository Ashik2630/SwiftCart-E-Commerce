const loadLesson = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => displayLesson(data))
}

const removeActive = () => {
    const lessonButtons = document.querySelectorAll('.lesson-btn')
    lessonButtons.forEach(btn => btn.classList.remove("active"))
}

const allProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllProducts(data))

}
const allProductsTop = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllProducts(data.slice(0, 3)))

}

const displayAllProductsTop = (products) => {
  const topProduct = document.getElementById('top-rated-product');
  topProduct.innerHTML = '';

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `

            <div class="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border m-12">

  <!-- Product Image -->
  <div class="bg-gray-100 p-6 flex justify-center">
    <img 
      src="${product.image}" 
      alt="Product"
      class="h-56 object-contain"
    />
  </div>

  <!-- Card Content -->
  <div class="p-5 space-y-3">

    <!-- Category + Rating -->
    <div class="flex justify-between items-center text-sm">
      <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
        ${product.category}
      </span>

      <div class="flex items-center gap-1 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="w-4 h-4 text-yellow-400 fill-yellow-400" 
             viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 
                   1.416 8.253L12 18.896l-7.416 4.791L6 
                   15.434 0 9.587l8.332-1.569z"/>
        </svg>
        <span>${product.rating.rate}(${product.rating.count}) </span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-800 truncate">
      ${product.title}
    </h2>

    <!-- Price -->
    <p class="text-xl font-bold text-gray-900">
      ${product.price}
    </p>

    <!-- Buttons -->
    <div class="flex gap-3 pt-2">
      <button onclick="loadProductDetail(${product.id})" class="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
        👁 Details
      </button>

      <button class="flex-1 bg-indigo-600 text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-indigo-700 transition">
        🛒 Add
      </button>
    </div>

  </div>
</div>

        `;
        productContainer.appendChild(cardDiv);
    });

}

const displayAllProducts = (products) => {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // clear old products

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
            <div class="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border m-12">

  <!-- Product Image -->
  <div class="bg-gray-100 p-6 flex justify-center">
    <img 
      src="${product.image}" 
      alt="Product"
      class="h-56 object-contain"
    />
  </div>

  <!-- Card Content -->
  <div class="p-5 space-y-3">

    <!-- Category + Rating -->
    <div class="flex justify-between items-center text-sm">
      <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
        ${product.category}
      </span>

      <div class="flex items-center gap-1 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="w-4 h-4 text-yellow-400 fill-yellow-400" 
             viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 
                   1.416 8.253L12 18.896l-7.416 4.791L6 
                   15.434 0 9.587l8.332-1.569z"/>
        </svg>
        <span>${product.rating.rate}(${product.rating.count}) </span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-800 truncate">
      ${product.title}
    </h2>

    <!-- Price -->
    <p class="text-xl font-bold text-gray-900">
      ${product.price}
    </p>

    <!-- Buttons -->
    <div class="flex gap-3 pt-2">
      <button onclick="loadProductDetail(${product.id})" class="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
        👁 Details
      </button>

      <button class="flex-1 bg-indigo-600 text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-indigo-700 transition">
        🛒 Add
      </button>
    </div>

  </div>
</div>

        `;
        productContainer.appendChild(cardDiv);
    });
}




const loadLevelProduct = (category) => {
  const encodedCategory = encodeURIComponent(category);
  const url = `https://fakestoreapi.com/products/category/${encodedCategory}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      removeActive();
      const clickBtn = document.getElementById(`lesson-btn-${category}`);
      if (clickBtn) {                       
        clickBtn.classList.add('active');
      } else {
        console.warn('Button not found:', `lesson-btn-${category}`);
      }
      displayLevelProduct(data);
    })
};

const loadProductDetail = (id) => {
    const url = `https://fakestoreapi.com/products/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayProductDetails(data))

}

const displayProductDetails = (product) => {
    // console.log(product)
    const detailsBox = document.getElementById('details-container')
    detailsBox.innerHTML = `

          <div class="md:w-full bg-white rounded-2xl shadow-lg overflow-hidden m-5 ">

  <!-- Product Image -->
  <div class="bg-gray-100 p-6 flex justify-center">
    <img 
      src="${product.image}" 
      alt="Product"
      class="h-56 object-contain"
    />
  </div>

  <!-- Card Content -->
  <div class="p-5 space-y-3">

    <!-- Category + Rating -->
    <div class="flex justify-between items-center text-sm">
      <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
        ${product.category}
      </span>

      <div class="flex items-center gap-1 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="w-4 h-4 text-yellow-400 fill-yellow-400" 
             viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 
                   1.416 8.253L12 18.896l-7.416 4.791L6 
                   15.434 0 9.587l8.332-1.569z"/>
        </svg>
        <span>${product.rating.rate}(${product.rating.count}) </span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-800 truncate">
      ${product.title}
    </h2>

    <!-- Price -->
    <p class="text-xl font-bold text-gray-900">
      ${product.price}
    </p>

    <!-- Buttons -->
    <div class="flex gap-3 pt-2">
      <button onclick="loadProductDetail(${product.id})" class="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
        👁 Details
      </button>

      <button class="flex-1 bg-indigo-600 text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-indigo-700 transition">
        🛒 Add
      </button>
    </div>

  </div>
 </div>
    
    `
    document.getElementById('product_modal').showModal();

}


const displayLevelProduct = (products) => {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    products.forEach(product => {
        console.log(product)
        const card = document.createElement('div')
        card.innerHTML =`
             <div class="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border m-12">

  <!-- Product Image -->
  <div class="bg-gray-100 p-6 flex justify-center">
    <img 
      src="${product.image}" 
      alt="Product"
      class="h-56 object-contain"
    />
  </div>

  <!-- Card Content -->
  <div class="p-5 space-y-3">

    <!-- Category + Rating -->
    <div class="flex justify-between items-center text-sm">
      <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
        ${product.category}
      </span>

      <div class="flex items-center gap-1 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="w-4 h-4 text-yellow-400 fill-yellow-400" 
             viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 
                   1.416 8.253L12 18.896l-7.416 4.791L6 
                   15.434 0 9.587l8.332-1.569z"/>
        </svg>
        <span>${product.rating.rate}(${product.rating.count}) </span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-800 truncate">
      ${product.title}
    </h2>

    <!-- Price -->
    <p class="text-xl font-bold text-gray-900">
      ${product.price}
    </p>

    <!-- Buttons -->
    <div class="flex gap-3 pt-2">
      <button onclick="loadProductDetail(${product.id})" class="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
        👁 Details
      </button>

      <button class="flex-1 bg-[#4f39f6] text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-indigo-700 transition">
        🛒 Add
      </button>
    </div>

  </div>
 </div>
  
        `
        productContainer.append(card)
    })
}

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    lessons.forEach(lesson => {

      
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button  class="btn btn-outline hover:bg-blue-700 hover:text-white lesson-btn"> ${lesson.toUpperCase()} 
        </button>
        `

        btnDiv.querySelector("button")
            .addEventListener("click", () => loadLevelProduct(lesson));
        levelContainer.append(btnDiv);
    });
}


allProductsTop()
loadLesson()