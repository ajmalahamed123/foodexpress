// Restaurant Data with Tamil Nadu Specialities
const restaurantData = {
    'saravana': {
        name: 'Saravana Bhavan',
        menu: [
            { name: 'Mini Tiffin', price: 120, desc: 'Idli, Pongal, Vada, Sambar, Chutney', img: 'https://images.unsplash.com/photo-1589301760557-adca89024840?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Ghee Roast Dosa', price: 95, desc: 'Crispy dosa with pure ghee', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Pongal Vadai', price: 85, desc: 'Classic comfort food', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Filter Coffee', price: 30, desc: 'Authentic Madras Coffee', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Meals', price: 150, desc: 'Unlimited South Indian Thali', img: 'https://images.unsplash.com/photo-1589301760557-adca89024840?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'thalappakatti': {
        name: 'Dindigul Thalappakatti',
        menu: [
            { name: 'Mutton Biryani', price: 320, desc: 'Seeraga Samba Mutton Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Chicken Biryani', price: 260, desc: 'Classic Dindigul Style', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Pepper Chicken', price: 240, desc: 'Spicy dry fry', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Mutton Kola Urundai', price: 190, desc: 'Minced meat balls', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'a2b': {
        name: 'Adyar Ananda Bhavan',
        menu: [
            { name: 'Sambar Idli', price: 70, desc: 'Dipped in ghee sambar', img: 'https://images.unsplash.com/photo-1589301760557-adca89024840?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Masala Dosa', price: 90, desc: 'Stuffed with potato masala', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Gulab Jamun', price: 50, desc: 'Sweet delight', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Pav Bhaji', price: 110, desc: 'Mumbai style', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'junior': {
        name: 'Junior Kuppanna',
        menu: [
            { name: 'Chicken Pallipalayam', price: 280, desc: 'Kongu special dry chicken', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Mutton Chukka', price: 320, desc: 'Spicy mutton fry', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Parotta & Chalna', price: 60, desc: 'Flaky layers', img: 'https://images.unsplash.com/photo-1606491956689-2ea28c6746ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'murugan': {
        name: 'Murugan Idli Shop',
        menu: [
            { name: 'Malligai Poo Idli', price: 50, desc: 'Softest idlis in town', img: 'https://images.unsplash.com/photo-1589301760557-adca89024840?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Podi Dosa', price: 85, desc: 'Spiced powder dosa', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Jigarthanda', price: 70, desc: 'Madurai famous drink', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    // Adding generic menus for others to save space, but logically separation exists
    'sangeetha': {
        name: 'Sangeetha Veg',
        menu: [
            { name: 'North Indian Thali', price: 180, desc: 'Roti, Paneer, Dal, Rice', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Paneer Butter Masala', price: 160, desc: 'Rich gravy', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
            { name: 'Falooda', price: 120, desc: 'Cold dessert', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'ambur': {
        name: 'Ambur Star Briyani',
        menu: [
            { name: 'Ambur Chicken Biryani', price: 220, desc: 'Seeraga Samba special', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Egg Biryani', price: 180, desc: 'For egg lovers', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Chicken 65', price: 190, desc: 'Spicy starter', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'ponnusamy': {
        name: 'Ponnusamy Hotel',
        menu: [
            { name: 'Chettinad Chicken Curry', price: 260, desc: 'Spicy gravy', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Fish Fry', price: 280, desc: 'Vanjaram Tawa Fry', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Rabbit Roast', price: 300, desc: 'Exotic special', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'annapoorna': {
        name: 'Annapoorna Gowrishankar',
        menu: [
            { name: 'Idli Sambar', price: 60, desc: 'Coimbatore special sambar', img: 'https://images.unsplash.com/photo-1589301760557-adca89024840?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Poori Masala', price: 80, desc: 'Delicious breakfast', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Rose Milk', price: 50, desc: 'Refreshing', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'ratna': {
        name: 'Ratna Cafe',
        menu: [
            { name: 'Sambar Idli (Dip)', price: 75, desc: 'Famous Sambar Idli', img: 'https://images.unsplash.com/photo-1589301760557-adca89024840?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Rava Dosa', price: 90, desc: 'Crispy semolina dosa', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Basundi', price: 80, desc: 'Sweet milk dessert', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'buhari': {
        name: 'Buhari Hotel',
        menu: [
            { name: 'Chicken 65', price: 250, desc: 'The Original Recipe', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Buhari Biryani', price: 290, desc: 'Signature Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Egg Parotta', price: 100, desc: 'Street food style', img: 'https://images.unsplash.com/photo-1606491956689-2ea28c6746ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'cream': {
        name: 'Cream Centre',
        menu: [
            { name: 'Channa Bhatura', price: 210, desc: 'Giant Bhatura', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Nachos', price: 240, desc: 'Cheesy goodness', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'kumar': {
        name: 'Madurai Kumar Mess',
        menu: [
            { name: 'Mutton Kola', price: 200, desc: 'Signature dish', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Ayira Meen Kulambu', price: 300, desc: 'Spicy fish curry', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'salem': {
        name: 'Salem RR Biryani',
        menu: [
            { name: 'Chicken Biryani', price: 240, desc: 'Salem style', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Pichu Potta Chicken', price: 200, desc: 'Shredded chicken fry', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    'krishna': {
        name: 'Sri Krishna Sweets',
        menu: [
            { name: 'Mysurpa', price: 150, desc: 'Melt in mouth ghee sweet', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Mixture', price: 80, desc: 'Spicy snack', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamic Menu Rendering
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const restaurantId = urlParams.get('id');

        if (restaurantId && restaurantData[restaurantId]) {
            const data = restaurantData[restaurantId];
            document.getElementById('menu-title').textContent = data.name + ' Menu';

            let html = '';
            data.menu.forEach(item => {
                html += `
                    <div class="food-card">
                        <img src="${item.img}" alt="${item.name}" class="food-img">
                        <div class="food-info">
                            <h3>${item.name}</h3>
                            <p>${item.desc}</p>
                            <div class="price">₹${item.price}</div>
                            <button class="btn" onclick="addToCart({name: '${item.name}', price: ${item.price}})">Add to Cart</button>
                        </div>
                    </div>
                `;
            });
            menuContainer.innerHTML = html;
        } else if (!restaurantId) {
            // Default or Error view if accessed directly without ID
            // For testing, let's load Saravana Bhavan by default or show error
            document.getElementById('menu-title').textContent = 'Welcome! Select a Restaurant';
            document.getElementById('error-msg').style.display = 'block';
            document.getElementById('error-msg').querySelector('h2').innerText = 'Please select a restaurant from the Restaurants page.';
        } else {
            document.getElementById('menu-title').style.display = 'none';
            document.getElementById('error-msg').style.display = 'block';
        }
    }

    // Cart Count Initialization
    updateCartCount();
});

// Helper function to update cart count in the navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
        countElement.textContent = cart.length;
    }
}

// Helper function to add item to cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${item.name} added to cart!`);
}
