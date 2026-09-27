// ============================================================
// PRICECOMPARER - PRODUCT DATABASE
// products.js
// ============================================================

const productCatalog = [

    // ========================================================
    // 1. IPHONE 16
    // ========================================================

    {
        id: "iphone-16",

        name: "iPhone 16",

        searchTerms: [
            "iphone",
            "iphone 16",
            "apple",
            "apple iphone 16",
            "mobile",
            "smartphone"
        ],

        category: "Smartphone",
        brand: "Apple",

        image: "images/iphone16.jpg",

        rating: 4.6,

        description:
            "Apple smartphone with powerful performance and advanced camera features.",

        stores: [
            {
                name: "Amazon",
                price: 69999,
                url: "https://www.amazon.in/s?k=iphone+16"
            },
            {
                name: "Flipkart",
                price: 68499,
                url: "https://www.flipkart.com/search?q=iphone%2016"
            },
            {
                name: "Croma",
                price: 70490,
                url: "https://www.croma.com/searchB?q=iphone%2016%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 69999,
                url: "https://www.reliancedigital.in/search?q=iphone%2016"
            }
        ]
    },


    // ========================================================
    // 2. IPHONE 16 PRO
    // ========================================================

    {
        id: "iphone-16-pro",

        name: "iPhone 16 Pro",

        searchTerms: [
            "iphone 16 pro",
            "iphone pro",
            "apple iphone 16 pro",
            "apple",
            "mobile",
            "smartphone"
        ],

        category: "Smartphone",
        brand: "Apple",

        image: "images/iphone16-pro.jpg",

        rating: 4.7,

        description:
            "Premium Apple smartphone with powerful performance and professional camera features.",

        stores: [
            {
                name: "Amazon",
                price: 104999,
                url: "https://www.amazon.in/s?k=iphone+16+pro"
            },
            {
                name: "Flipkart",
                price: 99999,
                url: "https://www.flipkart.com/search?q=iphone%2016%20pro"
            },
            {
                name: "Croma",
                price: 102990,
                url: "https://www.croma.com/searchB?q=iphone%2016%20pro%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 101999,
                url: "https://www.reliancedigital.in/search?q=iphone%2016%20pro"
            }
        ]
    },


    // ========================================================
    // 3. SAMSUNG GALAXY S25
    // ========================================================

    {
        id: "samsung-galaxy-s25",

        name: "Samsung Galaxy S25",

        searchTerms: [
            "samsung",
            "galaxy",
            "s25",
            "samsung s25",
            "samsung galaxy s25",
            "mobile",
            "smartphone"
        ],

        category: "Smartphone",
        brand: "Samsung",

        image: "images/s25.jpg",

        rating: 4.7,

        description:
            "Premium Samsung Galaxy smartphone with powerful performance and advanced AI features.",

        stores: [
            {
                name: "Amazon",
                price: 80999,
                url: "https://www.amazon.in/s?k=samsung+galaxy+s25"
            },
            {
                name: "Flipkart",
                price: 79999,
                url: "https://www.flipkart.com/search?q=samsung%20galaxy%20s25"
            },
            {
                name: "Croma",
                price: 81999,
                url: "https://www.croma.com/searchB?q=samsung%20galaxy%20s25%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 80999,
                url: "https://www.reliancedigital.in/search?q=samsung%20galaxy%20s25"
            }
        ]
    },


    // ========================================================
    // 4. SAMSUNG GALAXY S25 ULTRA
    // ========================================================

    {
        id: "samsung-galaxy-s25-ultra",

        name: "Samsung Galaxy S25 Ultra",

        searchTerms: [
            "samsung",
            "galaxy",
            "s25",
            "ultra",
            "s25 ultra",
            "samsung ultra",
            "samsung galaxy s25 ultra",
            "mobile",
            "smartphone"
        ],

        category: "Smartphone",
        brand: "Samsung",

        image: "images/s25-ultra.jpg",

        rating: 4.8,

        description:
            "Flagship Samsung smartphone with premium camera, powerful performance and advanced features.",

        stores: [
            {
                name: "Amazon",
                price: 131999,
                url: "https://www.amazon.in/s?k=samsung+galaxy+s25+ultra"
            },
            {
                name: "Flipkart",
                price: 129999,
                url: "https://www.flipkart.com/search?q=samsung%20galaxy%20s25%20ultra"
            },
            {
                name: "Croma",
                price: 134990,
                url: "https://www.croma.com/searchB?q=samsung%20galaxy%20s25%20ultra%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 132999,
                url: "https://www.reliancedigital.in/search?q=samsung%20galaxy%20s25%20ultra"
            }
        ]
    },


    // ========================================================
    // 5. ONEPLUS 13
    // ========================================================

    {
        id: "oneplus-13",

        name: "OnePlus 13",

        searchTerms: [
            "oneplus",
            "oneplus 13",
            "one plus 13",
            "mobile",
            "smartphone"
        ],

        category: "Smartphone",
        brand: "OnePlus",

        image: "images/oneplus13.jpg",

        rating: 4.5,

        description:
            "Flagship OnePlus smartphone with fast performance, premium display and powerful cameras.",

        stores: [
            {
                name: "Amazon",
                price: 62999,
                url: "https://www.amazon.in/s?k=oneplus+13"
            },
            {
                name: "Flipkart",
                price: 59999,
                url: "https://www.flipkart.com/search?q=oneplus%2013"
            },
            {
                name: "Croma",
                price: 61999,
                url: "https://www.croma.com/searchB?q=oneplus%2013%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 60999,
                url: "https://www.reliancedigital.in/search?q=oneplus%2013"
            }
        ]
    },


    // ========================================================
    // 6. MACBOOK AIR
    // ========================================================

    {
        id: "macbook-air",

        name: "MacBook Air",

        searchTerms: [
            "macbook",
            "macbook air",
            "apple macbook",
            "apple macbook air",
            "laptop",
            "apple laptop"
        ],

        category: "Laptop",
        brand: "Apple",

        image: "images/macbook-air.jpg",

        rating: 4.8,

        description:
            "Thin and lightweight Apple laptop with excellent battery life and powerful performance.",

        stores: [
            {
                name: "Amazon",
                price: 92990,
                url: "https://www.amazon.in/s?k=apple+macbook+air"
            },
            {
                name: "Flipkart",
                price: 89990,
                url: "https://www.flipkart.com/search?q=apple%20macbook%20air"
            },
            {
                name: "Croma",
                price: 94990,
                url: "https://www.croma.com/searchB?q=macbook%20air%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 91990,
                url: "https://www.reliancedigital.in/search?q=macbook%20air"
            }
        ]
    },


    // ========================================================
    // 7. ASUS VIVOBOOK 15
    // ========================================================

    {
        id: "asus-vivobook-15",

        name: "ASUS VivoBook 15",

        searchTerms: [
            "asus",
            "vivobook",
            "vivobook 15",
            "asus vivobook",
            "asus vivobook 15",
            "laptop"
        ],

        category: "Laptop",
        brand: "ASUS",

        image: "images/asus-vivobook15.jpg",

        rating: 4.4,

        description:
            "Everyday ASUS laptop designed for productivity, study and entertainment.",

        stores: [
            {
                name: "Amazon",
                price: 45990,
                url: "https://www.amazon.in/s?k=asus+vivobook+15"
            },
            {
                name: "Flipkart",
                price: 43990,
                url: "https://www.flipkart.com/search?q=asus%20vivobook%2015"
            },
            {
                name: "Croma",
                price: 46990,
                url: "https://www.croma.com/searchB?q=asus%20vivobook%2015%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 44990,
                url: "https://www.reliancedigital.in/search?q=asus%20vivobook%2015"
            }
        ]
    },


    // ========================================================
    // 8. SONY WH-1000XM5
    // ========================================================

    {
        id: "sony-wh-1000xm5",

        name: "Sony WH-1000XM5",

        searchTerms: [
            "sony",
            "sony headphones",
            "xm5",
            "wh1000xm5",
            "wh-1000xm5",
            "sony xm5",
            "sony wh-1000xm5",
            "headphones"
        ],

        category: "Headphones",
        brand: "Sony",

        image: "images/sony-xm5.jpg",

        rating: 4.7,

        description:
            "Premium Sony wireless headphones with advanced noise cancellation and high-quality audio.",

        stores: [
            {
                name: "Amazon",
                price: 29990,
                url: "https://www.amazon.in/s?k=sony+wh-1000xm5"
            },
            {
                name: "Flipkart",
                price: 28990,
                url: "https://www.flipkart.com/search?q=sony%20wh-1000xm5"
            },
            {
                name: "Croma",
                price: 30990,
                url: "https://www.croma.com/searchB?q=sony%20wh-1000xm5%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 29990,
                url: "https://www.reliancedigital.in/search?q=sony%20wh-1000xm5"
            }
        ]
    },


    // ========================================================
    // 9. AIRPODS PRO
    // ========================================================

    {
        id: "airpods-pro",

        name: "AirPods Pro",

        searchTerms: [
            "airpods",
            "airpods pro",
            "apple airpods",
            "apple airpods pro",
            "earbuds",
            "wireless earbuds"
        ],

        category: "Earbuds",
        brand: "Apple",

        image: "images/airpods-pro.jpg",

        rating: 4.7,

        description:
            "Apple wireless earbuds with active noise cancellation and immersive audio.",

        stores: [
            {
                name: "Amazon",
                price: 22990,
                url: "https://www.amazon.in/s?k=apple+airpods+pro"
            },
            {
                name: "Flipkart",
                price: 21990,
                url: "https://www.flipkart.com/search?q=apple%20airpods%20pro"
            },
            {
                name: "Croma",
                price: 23990,
                url: "https://www.croma.com/searchB?q=airpods%20pro%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 22990,
                url: "https://www.reliancedigital.in/search?q=airpods%20pro"
            }
        ]
    },


    // ========================================================
    // 10. PLAYSTATION 5
    // ========================================================

    {
        id: "playstation-5",

        name: "PlayStation 5",

        searchTerms: [
            "playstation",
            "playstation 5",
            "ps5",
            "sony ps5",
            "sony playstation 5",
            "gaming",
            "console"
        ],

        category: "Gaming Console",
        brand: "Sony",

        image: "images/ps5.jpg",

        rating: 4.8,

        description:
            "Sony next-generation gaming console with high-speed SSD and immersive gaming performance.",

        stores: [
            {
                name: "Amazon",
                price: 54990,
                url: "https://www.amazon.in/s?k=playstation+5"
            },
            {
                name: "Flipkart",
                price: 52990,
                url: "https://www.flipkart.com/search?q=playstation%205"
            },
            {
                name: "Croma",
                price: 54990,
                url: "https://www.croma.com/searchB?q=playstation%205%3Arelevance"
            },
            {
                name: "Reliance Digital",
                price: 53990,
                url: "https://www.reliancedigital.in/search?q=playstation%205"
            }
        ]
    }

];


// ============================================================
// OPTIONAL:
// Makes productCatalog available through window.productCatalog
// ============================================================

window.productCatalog = productCatalog;