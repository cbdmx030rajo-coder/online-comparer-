/* =====================================================
   PRICECOMPARER
   PHASE 1 - HOMEPAGE JAVASCRIPT
===================================================== */


/* ================= ELEMENTS ================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const productGrid =
    document.getElementById("productGrid");

const productCards =
    document.querySelectorAll(".product-card");

const loginBtn =
    document.getElementById("loginBtn");

const viewAllBtn =
    document.getElementById("viewAllBtn");

const subscribeBtn =
    document.getElementById("subscribeBtn");

const emailInput =
    document.getElementById("emailInput");


/* ================= SEARCH ================= */

function searchProducts() {

    const searchTerm =
        searchInput.value
        .trim()
        .toLowerCase();


    let found = 0;


    removeNoResults();


    /*
        Empty search:
        Show all products
    */

    if (searchTerm === "") {

        productCards.forEach(card => {

            card.style.display = "flex";

        });

        return;
    }


    /*
        Search products
    */

    productCards.forEach(card => {

        const productName =
            card
            .getAttribute("data-name")
            .toLowerCase();


        if (
            productName.includes(searchTerm)
        ) {

            card.style.display = "flex";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    /*
        No product found
    */

    if (found === 0) {

        const message =
            document.createElement("div");

        message.className =
            "no-results";

        message.id =
            "noResults";

        message.innerHTML = `
            <h3>No products found</h3>
            <p>
                Try searching for iPhone, laptop,
                headphones or another product.
            </p>
        `;

        productGrid.appendChild(message);

    }


    /*
        Move to products
    */

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* ================= SEARCH BUTTON ================= */
if (searchButton && searchInput) {
searchButton.addEventListener(
    "click",
    function () {

        const product =
            searchInput.value.trim();

        if (product === "") {

            alert(
                "Please enter a product name."
            );

            searchInput.focus();

            return;
        }


        window.location.href =
            "comparison.html?product=" +
            encodeURIComponent(product);

    }
);

}
/* ================= ENTER KEY ================= */
if (searchInput) {
searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            const product =
                searchInput.value.trim();

            if (product === "") {

                alert(
                    "Please enter a product name."
                );

                return;

            }


            window.location.href =
                "comparison.html?product=" +
                encodeURIComponent(product);

        }

    }
);
}   

/* ================= REMOVE MESSAGE ================= */

function removeNoResults() {

    const message =
        document.getElementById("noResults");


    if (message) {

        message.remove();

    }

}


/* ================= CATEGORY CARDS ================= */

const categoryCards =
    document.querySelectorAll(
        ".category-card"
    );


categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        function() {

            const category =
                card.getAttribute(
                    "data-category"
                );


            searchInput.value =
                category;


            searchProducts();

        }
    );

});


/* ================= COMPARE BUTTONS ================= */

const compareButtons =
    document.querySelectorAll(
        ".compare-btn"
    );


compareButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            const product =
                button.getAttribute(
                    "data-product"
                );


            alert(
                `Price comparison for ${product} will be added in Phase 2.`
            );

        }
    );

});


/* ================= LOGIN ================= */
if (loginBtn) {
loginBtn.addEventListener(
    "click",
    function() {

        alert(
            "Login and user accounts will be added in a later phase."
        );

    }
);


/* ================= VIEW ALL ================= */

viewAllBtn.addEventListener(
    "click",
    function() {

        searchInput.value = "";

        productCards.forEach(card => {

            card.style.display = "flex";

        });

        removeNoResults();

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);
}   

/* ================= NEWSLETTER ================= */
if (subscribeBtn) {
subscribeBtn.addEventListener(
    "click",
    function() {

        const email =
            emailInput.value.trim();


        if (email === "") {

            alert(
                "Please enter your email address."
            );

            emailInput.focus();

            return;

        }


        if (!email.includes("@")) {

            alert(
                "Please enter a valid email address."
            );

            emailInput.focus();

            return;

        }


        alert(
            "Thank you for subscribing to PriceComparer!"
        );


        emailInput.value = "";

    }
);
}
// =====================================================
// PRICE COMPARER - DYNAMIC COMPARISON DATA
// =====================================================

 


// =====================================================
// FIND PRODUCT FROM URL
// =====================================================

function getProductFromURL() {

    const params =
        new URLSearchParams(window.location.search);

    const productName =
        params.get("product");

    if (!productName) {
        return null;
    }

    const searchText =
        productName
            .trim()
            .toLowerCase();

    const product =
        productCatalog.find(function(item) {

            return (
                item.name.trim().toLowerCase() === searchText
                ||
                item.id.trim().toLowerCase() === searchText
            );

        });

    return product || null;
}
// =====================================================
// FORMAT PRICE
// =====================================================

function formatPrice(price) {

    return "₹" +
        price.toLocaleString("en-IN");

}


// =====================================================
// UPDATE COMPARISON PAGE
// =====================================================

    


function renderStoreCards(product) {

    const container =
        document.getElementById("storeCards");

    if (!container) {
        return;
    }

    // Sort stores from lowest price to highest price
    const sortedStores =
        [...product.stores].sort(function(a, b) {
            return a.price - b.price;
        });

    const lowestPrice =
        sortedStores[0].price;

    // Clear existing store cards
    container.innerHTML = "";

    // Create cards
    sortedStores.forEach(function(store, index) {

        const isBest =
            index === 0;

        const difference =
            store.price - lowestPrice;

            const encodedName = encodeURIComponent(product.name);

let dealUrl = "";

if (store.name === "Amazon") {
    dealUrl =
        "https://www.amazon.in/s?k=" +
        encodedName;
}
else if (store.name === "Flipkart") {
    dealUrl =
        "https://www.flipkart.com/search?q=" +
        encodedName;
}
else if (store.name === "Croma") {
    dealUrl =
        "https://www.croma.com/searchB?q=" +
        encodedName +
        "%3Arelevance";
}
else if (store.name === "Reliance Digital") {
    dealUrl =
        "https://www.reliancedigital.in/search?q=" +
        encodedName;
}

        const card =
            document.createElement("div");

        card.className =
            "store-card" +
            (isBest ? " best-store" : "");

        // Store logo
        let logoClass = "";

        if (store.name === "Amazon") {
            logoClass = "amazon-logo";
        }

        if (store.name === "Flipkart") {
            logoClass = "flipkart-logo";
        }

        if (store.name === "Croma") {
            logoClass = "croma-logo";
        }

        if (store.name === "Reliance Digital") {
            logoClass = "reliance-logo";
        }

        const firstLetter =
            store.name.charAt(0);

        card.innerHTML = `
            
            ${
                isBest
                ? `
                    <div class="best-badge">
                        🏆 BEST PRICE
                    </div>
                `
                : ""
            }

            <div class="store-info">

                <div class="store-logo ${logoClass}">
                    ${firstLetter}
                </div>

                <div>

                    <h3>
                        ${store.name}
                    </h3>

                    <p>
                        ${store.name} India
                    </p>

                </div>

            </div>


            <div class="store-price">

                <small>
                    Price
                </small>

                <strong>
                    ${formatPrice(store.price)}
                </strong>

                ${
                    isBest
                    ? `
                        <span class="save-text">
                            BEST PRICE
                        </span>
                    `
                    : `
                        <span class="save-text">
                            ₹${difference.toLocaleString("en-IN")} more
                        </span>
                    `
                }

            </div>


            <div class="delivery">

                <span>✓</span>

                Free delivery

            </div>

<a
    href="${dealUrl}"
    target="_blank"
    rel="noopener noreferrer"
    class="buy-btn ${isBest ? "best-buy" : ""}"
>
    View Deal →
</a>
        `;

        container.appendChild(card);

    });


    // Update store count
    const storeCount =
        document.getElementById("storeCount");

    if (storeCount) {

        storeCount.textContent =
            sortedStores.length +
            " stores found";

    }

}
function loadComparisonProduct() {

    const product =
        getProductFromURL();
        if (!product) {

    showProductNotFound();

    return;

}


    // Product information

    const productName =
        document.getElementById(
            "comparisonProductName"
        );

    const productCategory =
        document.querySelector(
            ".comparison-category"
        );

    const productImage =
        document.getElementById(
            "comparisonProductImage"
        );


    if (productName) {
        productName.textContent =
            product.name;
    }


    if (productCategory) {
        productCategory.textContent =
            product.category;
    }


    if (productImage) {
        productImage.src =
            product.image;

        productImage.alt =
            product.name;
    }


    // Rating

    const rating =
        document.querySelector(".rating");

    if (rating) {

        rating.innerHTML =
            "⭐ " +
            product.rating +
            ' <span>Excellent product rating</span>';

    }


    // Search box

    const searchBox =
        document.getElementById(
            "comparisonSearch"
        );

    if (searchBox) {

        searchBox.value =
            product.name;

    }


    // Find prices

    const prices =
        product.stores.map(
            store => store.price
        );


    const lowestPrice =
        Math.min(...prices);

    const highestPrice =
        Math.max(...prices);

    const savings =
        highestPrice - lowestPrice;

        renderStoreCards(product);


    // Best price

    const bestPrice =
        document.getElementById(
            "bestPrice"
        );

    if (bestPrice) {

        bestPrice.textContent =
            formatPrice(lowestPrice);

    }


    // Best price savings

    const bestPriceSummary =
        document.querySelector(
            ".best-price-summary small"
        );

    if (bestPriceSummary) {

        bestPriceSummary.textContent =
            "Save up to " +
            formatPrice(savings);

    }





    // Overall saving message

    const savingHeading =
        document.querySelector(
            ".saving-section h3"
        );

    if (savingHeading) {

        savingHeading.textContent =
            "You can save " +
            formatPrice(savings);

    }


    // Search button

    const searchButton =
        document.getElementById(
            "comparisonSearchButton"
        );


    if (searchButton) {

        searchButton.onclick =
            function() {

                const value =
                    searchBox.value.trim();


                if (!value) {

                    alert(
                        "Please enter a product name."
                    );

                    return;

                }


                window.location.href =
                    "comparison.html?product=" +
                    encodeURIComponent(value);

            };

    }

}


// =====================================================
// RUN ONLY ON COMPARISON PAGE
// =====================================================

if (
    window.location.pathname.includes(
        "comparison.html"
    )
) {

    document.addEventListener(
        "DOMContentLoaded",
        loadComparisonProduct
    );

}