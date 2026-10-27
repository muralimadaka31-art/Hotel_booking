// HOTEL DATA

const hotels = [
    {
        id: 1,
        name: "The Palm House",
        location: "GOA, INDIA",
        city: "Goa",
        category: ["Beach", "Luxury"],
        price: 8499,
        rating: 4.9,
        reviews: 128,
        tag: "GUEST FAVORITE",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
        description: "A breezy coastal hideaway with sunlit rooms, a dreamy pool, and the beach just a stroll away.",
        amenities: ["Pool", "Beach access", "Breakfast"],
        rooms: 24
    },
    {
        id: 2,
        name: "Pine & Peak Retreat",
        location: "MANALI, INDIA",
        city: "Manali",
        category: ["Mountain", "Nature"],
        price: 6299,
        rating: 4.8,
        reviews: 96,
        tag: "MOUNTAIN ESCAPE",
        image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=1000&q=85",
        description: "Wake up to crisp mountain air, pine-scented trails, and peaceful views from your private balcony.",
        amenities: ["Mountain view", "Fireplace", "Wi-Fi"],
        rooms: 18
    },
    {
        id: 3,
        name: "The Meridian House",
        location: "BENGALURU, INDIA",
        city: "Bengaluru",
        category: ["City", "Luxury"],
        price: 7299,
        rating: 4.7,
        reviews: 214,
        tag: "CITY FAVORITE",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
        description: "A polished urban retreat with warm service, elegant interiors, and the city right outside.",
        amenities: ["Rooftop pool", "Restaurant", "Gym"],
        rooms: 42
    },
    {
        id: 4,
        name: "Azure Bay Resort",
        location: "VARKALA, INDIA",
        city: "Varkala",
        category: ["Beach", "Nature"],
        price: 5599,
        rating: 4.8,
        reviews: 84,
        tag: "SEA VIEW",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=85",
        description: "Slow down beside the Arabian Sea at this relaxed hideaway with golden sunsets and open-air dining.",
        amenities: ["Sea view", "Restaurant", "Spa"],
        rooms: 21
    },
    {
        id: 5,
        name: "Willow Creek Lodge",
        location: "COORG, INDIA",
        city: "Coorg",
        category: ["Nature", "Mountain"],
        price: 4899,
        rating: 4.6,
        reviews: 73,
        tag: "NATURE STAY",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85",
        description: "A tucked-away lodge surrounded by green hills, coffee country, and peaceful surroundings.",
        amenities: ["Garden", "Nature trails", "Breakfast"],
        rooms: 16
    },
    {
        id: 6,
        name: "The Ivory Grand",
        location: "HYDERABAD, INDIA",
        city: "Hyderabad",
        category: ["City", "Luxury"],
        price: 9999,
        rating: 4.9,
        reviews: 187,
        tag: "LUXURY PICK",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85",
        description: "Thoughtful luxury, beautifully layered interiors, and a calm sanctuary in the heart of the city.",
        amenities: ["Fine dining", "Spa", "Concierge"],
        rooms: 56
    },
    {
        id: 7,
        name: "Sand & Sol Villas",
        location: "GOKARNA, INDIA",
        city: "Gokarna",
        category: ["Beach", "Nature"],
        price: 6799,
        rating: 4.7,
        reviews: 62,
        tag: "HIDDEN GEM",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85",
        description: "Private villas, palm-fringed paths, and barefoot days for a little off-the-map magic.",
        amenities: ["Private patio", "Beach access", "Kitchen"],
        rooms: 12
    },
    {
        id: 8,
        name: "Cloudline Suites",
        location: "OOTY, INDIA",
        city: "Ooty",
        category: ["Mountain", "Luxury"],
        price: 7899,
        rating: 4.8,
        reviews: 109,
        tag: "SCENIC STAY",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85",
        description: "A design-led mountain stay with big windows, cozy corners, and misty hillside mornings.",
        amenities: ["Mountain view", "Fireplace", "Restaurant"],
        rooms: 20
    },
    {
        id: 9,
        name: "The Old Quarter",
        location: "JAIPUR, INDIA",
        city: "Jaipur",
        category: ["City", "Luxury"],
        price: 5999,
        rating: 4.7,
        reviews: 145,
        tag: "CULTURE & COMFORT",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85",
        description: "A character-filled stay inspired by local craft, colorful streets, and the romance of old Jaipur.",
        amenities: ["Heritage design", "Restaurant", "Courtyard"],
        rooms: 30
    }
];


// GET HTML ELEMENTS

const hotelGrid = document.getElementById("hotelGrid");

const destination = document.getElementById("destination");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const guests = document.getElementById("guests");

const resultsText = document.getElementById("resultsText");
const emptyState = document.getElementById("emptyState");


// VARIABLES

let selectedCategory = "All";
let searchTerm = "";

let favorites = JSON.parse(
    localStorage.getItem("stayvistaFavorites") || "[]"
);

let bookings = JSON.parse(
    localStorage.getItem("stayvistaBookings") || "[]"
);

let showingFavorites = false;
let toastTimer;


// SET DEFAULT CHECK-IN AND CHECK-OUT DATES

const today = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const dayAfter = new Date(today);
dayAfter.setDate(today.getDate() + 2);


function dateValue(date) {
    return `${date.getFullYear()}-${String(
        date.getMonth() + 1
    ).padStart(2, "0")}-${String(
        date.getDate()
    ).padStart(2, "0")}`;
}

checkin.min = dateValue(today);
checkin.value = dateValue(tomorrow);

checkout.min = dateValue(dayAfter);
checkout.value = dateValue(dayAfter);


// UPDATE CHECK-OUT DATE WHEN CHECK-IN CHANGES

checkin.addEventListener("change", function () {

    const next = new Date(checkin.value + "T12:00:00");

    next.setDate(next.getDate() + 1);

    checkout.min = dateValue(next);

    if (!checkout.value || checkout.value <= checkin.value) {
        checkout.value = dateValue(next);
    }

});


// FORMAT PRICE

function money(amount) {

    return "₹" + amount.toLocaleString("en-IN");

}


// CALCULATE NUMBER OF NIGHTS

function nightsCount() {

    if (!checkin.value || !checkout.value) {
        return 1;
    }

    const start = new Date(checkin.value + "T12:00:00");
    const end = new Date(checkout.value + "T12:00:00");

    const difference = (end - start) / 86400000;

    return Math.max(1, difference);

}


// SHOW TOAST MESSAGE

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 2800);

}


// SAVE FAVORITES

function saveFavorites() {

    localStorage.setItem(
        "stayvistaFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

}


// UPDATE FAVORITE COUNT

function updateFavoriteCount() {

    document.querySelector(".saved-count").textContent =
        favorites.length;

}


// DISPLAY HOTELS

function renderHotels() {

    let list = hotels.filter(function (hotel) {

        const matchesCategory =
            selectedCategory === "All" ||
            hotel.category.includes(selectedCategory);

        const matchesSearch =
            !searchTerm ||
            `${hotel.name} ${hotel.city} ${hotel.location} ${hotel.category.join(" ")}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        const matchesFavorites =
            !showingFavorites || favorites.includes(hotel.id);

        return (
            matchesCategory &&
            matchesSearch &&
            matchesFavorites
        );

    });


    // SORT HOTELS

    const sort = document.getElementById("sortSelect").value;

    if (sort === "low") {

        list.sort((a, b) => a.price - b.price);

    }

    if (sort === "high") {

        list.sort((a, b) => b.price - a.price);

    }

    if (sort === "rating") {

        list.sort((a, b) => b.rating - a.rating);

    }


    // CREATE HOTEL CARDS

    hotelGrid.innerHTML = list.map(function (hotel) {

        return `
            <article class="hotel-card">

                <div class="hotel-photo">

                    <img
                        src="${hotel.image}"
                        alt="${hotel.name} hotel"
                        loading="lazy"
                        onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'"
                    >

                    <span class="badge">
                        ${hotel.tag}
                    </span>

                    <button
                        class="heart-button ${favorites.includes(hotel.id) ? "saved" : ""}"
                        data-favorite="${hotel.id}"
                        aria-label="Save hotel"
                    >
                        ${favorites.includes(hotel.id) ? "♥" : "♡"}
                    </button>

                </div>


                <div class="hotel-info">

                    <div class="hotel-location">
                        ⌖ ${hotel.location}
                    </div>

                    <div class="hotel-title-row">

                        <h3>${hotel.name}</h3>

                        <div class="rating">
                            <span>★</span>
                            ${hotel.rating}

                            <span style="color:#929a93;font-weight:400">
                                (${hotel.reviews})
                            </span>
                        </div>

                    </div>

                    <p class="hotel-desc">
                        ${hotel.description}
                    </p>

                    <div class="amenities">

                        ${hotel.amenities.slice(0, 3).map(function (amenity) {

                            return `<span>✓ ${amenity}</span>`;

                        }).join("")}

                    </div>

                    <div class="card-bottom">

                        <div class="price">

                            <strong>
                                ${money(hotel.price)}
                            </strong>

                            <small>
                                per night · taxes may apply
                            </small>

                        </div>

                        <button
                            class="details-button"
                            data-details="${hotel.id}"
                        >
                            View stay ↗
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");


    // UPDATE RESULTS TEXT

    resultsText.textContent = showingFavorites
        ? `${list.length} saved ${list.length === 1 ? "stay" : "stays"}`
        : `${list.length} handpicked ${list.length === 1 ? "stay" : "stays"}${searchTerm ? " matching your search" : ""}`;


    // SHOW EMPTY STATE

    emptyState.classList.toggle("hidden", list.length !== 0);

    hotelGrid.classList.toggle("hidden", list.length === 0);

}


// ADD OR REMOVE FAVORITES

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(function (item) {
            return item !== id;
        });

        showToast("Removed from your saved stays.");

    } else {

        favorites.push(id);

        showToast("Stay saved for later ♥");

    }

    saveFavorites();

    renderHotels();

}


// FIND HOTEL BY ID

function hotelById(id) {

    return hotels.find(function (hotel) {
        return hotel.id === Number(id);
    });

}


// OPEN HOTEL DETAILS

function openHotel(id) {

    const hotel = hotelById(id);

    if (!hotel) {
        return;
    }

    document.getElementById("hotelModalContent").innerHTML = `

        <img
            class="modal-hero"
            src="${hotel.image}"
            alt="${hotel.name}"
        >

        <div class="modal-body">

            <span class="eyebrow">
                ${hotel.location} · ${hotel.tag}
            </span>

            <h2>${hotel.name}</h2>

            <div class="rating">
                <span>★</span>
                ${hotel.rating}

                <span style="color:#929a93;font-weight:400">
                    · ${hotel.reviews} guest reviews
                </span>
            </div>

            <p>
                ${hotel.description}
                Enjoy a considered mix of comfort, local character,
                and thoughtful details throughout your stay.
            </p>

            <div class="modal-meta">

                ${hotel.amenities.map(function (amenity) {
                    return `<span>✓ ${amenity}</span>`;
                }).join("")}

                <span>♙ Up to 2 guests per room</span>

                <span>▦ ${hotel.rooms} rooms</span>

            </div>

            <div class="modal-actions">

                <div>

                    <strong>${money(hotel.price)}</strong>

                    <small>per night · demo pricing</small>

                </div>

                <button
                    class="primary-button"
                    data-book="${hotel.id}"
                >
                    Book this stay ↗
                </button>

            </div>

        </div>

    `;

    document.getElementById("hotelModal").showModal();

}


// OPEN BOOKING FORM

function openBooking(id) {

    const hotel = hotelById(id);

    if (!hotel) {
        return;
    }

    document.getElementById("hotelModal").close();

    const nights = nightsCount();

    const total = hotel.price * nights;

    document.getElementById("bookingContent").innerHTML = `

        <div class="booking-inner">

            <span class="eyebrow">
                MAKE IT A GETAWAY
            </span>

            <h2>Book your stay</h2>

            <p style="font-size:12px;color:#778078">
                Complete the details below to create a demo booking.
            </p>

            <div class="booking-summary">

                <strong>${hotel.name}</strong>

                <br>

                ⌖ ${hotel.location}

                <br>

                Check-in: ${checkin.value}

                &nbsp; · &nbsp;

                Check-out: ${checkout.value}

                <br>

                ${nights} night${nights === 1 ? "" : "s"}

                · ${guests.value} guest(s)

                <hr style="border:0;border-top:1px solid #e0e4dc">

                <strong>Total: ${money(total)}</strong>

                <br>

                <small>
                    Demo only — no payment will be taken.
                </small>

            </div>


            <form class="stack-form" id="bookingForm">

                <label>
                    Full name

                    <input
                        name="name"
                        required
                        placeholder="Name on booking"
                        autocomplete="name"
                    >
                </label>

                <label>
                    Email address

                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        autocomplete="email"
                    >
                </label>

                <label>
                    Phone number

                    <input
                        name="phone"
                        required
                        type="tel"
                        pattern="[0-9+() -]{7,18}"
                        placeholder="Your contact number"
                        autocomplete="tel"
                    >
                </label>

                <label>
                    Special request (optional)

                    <input
                        name="request"
                        placeholder="Late check-in, extra pillow..."
                    >
                </label>

                <button class="primary-button" type="submit">
                    Confirm demo booking · ${money(total)}
                </button>

            </form>

        </div>

    `;

    document.getElementById("bookingModal").showModal();

}


// HOTEL CARD BUTTONS

hotelGrid.addEventListener("click", function (event) {

    const favoriteButton = event.target.closest("[data-favorite]");

    const detailsButton = event.target.closest("[data-details]");

    if (favoriteButton) {

        toggleFavorite(Number(favoriteButton.dataset.favorite));

    }

    if (detailsButton) {

        openHotel(Number(detailsButton.dataset.details));

    }

});


// BOOKING BUTTON

document.addEventListener("click", function (event) {

    const button = event.target.closest("[data-book]");

    if (button) {

        openBooking(Number(button.dataset.book));

    }

});


// CLOSE MODALS

document.querySelectorAll("[data-close]").forEach(function (button) {

    button.addEventListener("click", function () {

        document.getElementById(button.dataset.close).close();

    });

});


// CLOSE MODAL WHEN CLICKING OUTSIDE

document.querySelectorAll("dialog").forEach(function (dialog) {

    dialog.addEventListener("click", function (event) {

        if (event.target === dialog) {
            dialog.close();
        }

    });

});


// SEARCH HOTELS

document.getElementById("searchForm").addEventListener("submit", function (event) {

    event.preventDefault();

    if (checkout.value <= checkin.value) {

        showToast("Check-out must be after check-in.");

        return;

    }

    searchTerm = destination.value.trim();

    selectedCategory = "All";

    showingFavorites = false;

    document.querySelectorAll(".category").forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.category === "All"
        );

    });

    renderHotels();

    document.getElementById("stays").scrollIntoView({
        behavior: "smooth"
    });

});


// CATEGORY FILTERS

document.getElementById("categoryRow").addEventListener("click", function (event) {

    const button = event.target.closest("[data-category]");

    if (!button) {
        return;
    }

    selectedCategory = button.dataset.category;

    showingFavorites = false;

    document.querySelectorAll(".category").forEach(function (categoryButton) {

        categoryButton.classList.toggle(
            "active",
            categoryButton === button
        );

    });

    renderHotels();

});


// SORT HOTELS

document.getElementById("sortSelect").addEventListener("change", renderHotels);


// CLEAR FILTERS

document.getElementById("clearFilters").addEventListener("click", function () {

    destination.value = "";

    searchTerm = "";

    selectedCategory = "All";

    showingFavorites = false;

    document.querySelectorAll(".category").forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.category === "All"
        );

    });

    document.getElementById("sortSelect").value = "recommended";

    renderHotels();

});


// SHOW ALL HOTELS

document.getElementById("showAllButton").addEventListener("click", function () {

    destination.value = "";

    searchTerm = "";

    selectedCategory = "All";

    showingFavorites = false;

    document.querySelectorAll(".category").forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.category === "All"
        );

    });

    renderHotels();

});


// SHOW SAVED FAVORITES

document.getElementById("favoritesNav").addEventListener("click", function () {

    showingFavorites = !showingFavorites;

    selectedCategory = "All";

    document.querySelectorAll(".category").forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.category === "All"
        );

    });

    renderHotels();

    document.getElementById("stays").scrollIntoView({
        behavior: "smooth"
    });

    showToast(
        showingFavorites
            ? "Showing your saved stays"
            : "Showing all stays"
    );

});


// CONFIRM BOOKINGS

document.getElementById("bookingModal").addEventListener("submit", function (event) {

    if (event.target.id !== "bookingForm") {
        return;
    }

    event.preventDefault();

    const form = event.target;

    const name = form.elements.name.value.trim();

    const email = form.elements.email.value.trim();

    const phone = form.elements.phone.value.trim();

    const hotelName = document.querySelector(
        ".booking-summary strong"
    ).textContent;

    const hotel = hotels.find(function (item) {
        return item.name === hotelName;
    });

    const booking = {

        id: Date.now(),

        hotelId: hotel ? hotel.id : null,

        hotelName: hotelName,

        guestName: name,

        email: email,

        phone: phone,

        request: form.elements.request.value,

        checkin: checkin.value,

        checkout: checkout.value,

        guests: guests.value,

        nights: nightsCount(),

        total: hotel ? hotel.price * nightsCount() : 0,

        status: "Confirmed (demo)"

    };


    bookings.push(booking);

    localStorage.setItem(
        "stayvistaBookings",
        JSON.stringify(bookings)
    );


    // DISPLAY BOOKING CONFIRMATION

    document.getElementById("bookingContent").innerHTML = `

        <div
            class="booking-inner"
            style="text-align:center;padding:50px 32px"
        >

            <div style="font-size:50px;color:#31594b">
                ✓
            </div>

            <span class="eyebrow">
                YOU'RE ALL SET
            </span>

            <h2>Booking confirmed!</h2>

            <p style="font-size:13px;color:#6e7772;line-height:1.8">

                Your demo booking for

                <strong>${booking.hotelName}</strong>

                has been saved in this browser.

            </p>

            <div class="booking-summary" style="text-align:left">

                <strong>
                    Booking reference: SV${String(booking.id).slice(-7)}
                </strong>

                <br>

                ${booking.checkin} → ${booking.checkout}

                <br>

                ${booking.nights} night(s)

                · ${booking.guests} guest(s)

                <br>

                Total: ${money(booking.total)}

                <br>

                <small>
                    No real reservation or payment was made.
                </small>

            </div>

            <button class="primary-button" id="doneBooking">
                Done
            </button>

        </div>

    `;

    showToast("Demo booking confirmed!");

    document.getElementById("doneBooking").addEventListener("click", function () {

        document.getElementById("bookingModal").close();

    });

});


// PROPERTY HOST FORM

document.getElementById("hostButton").addEventListener("click", function () {

    document.getElementById("hostModal").showModal();

});

document.getElementById("hostForm").addEventListener("submit", function (event) {

    event.preventDefault();

    document.getElementById("hostModal").close();

    event.target.reset();

    showToast("Thanks! This demo request has been noted locally.");

});


// NEWSLETTER FORM

document.getElementById("newsletterForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("newsletterEmail").value;

    const subscribers = JSON.parse(
        localStorage.getItem("stayvistaSubscribers") || "[]"
    );

    if (subscribers.includes(email)) {

        document.getElementById("newsletterMessage").textContent =
            "You're already on the demo list — thank you!";

    } else {

        subscribers.push(email);

        localStorage.setItem(
            "stayvistaSubscribers",
            JSON.stringify(subscribers)
        );

        document.getElementById("newsletterMessage").textContent =
            "You're on the list! Watch this space for inspiration.";

        event.target.reset();

    }

});


// EXPERIENCE BUTTON

document.getElementById("experienceButton").addEventListener("click", function () {

    destination.value = "";

    searchTerm = "";

    selectedCategory = "Nature";

    showingFavorites = false;

    document.querySelectorAll(".category").forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.category === "Nature"
        );

    });

    renderHotels();

    document.getElementById("stays").scrollIntoView({
        behavior: "smooth"
    });

});


// MOBILE NAVIGATION

document.getElementById("menuButton").addEventListener("click", function () {

    document.querySelector(".nav-links").classList.toggle("open");

});

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        document.querySelector(".nav-links").classList.remove("open");

    });

});


// DISPLAY SAVED BOOKINGS

function renderBookings() {

    const content = document.getElementById("myBookingsContent");

    if (!bookings.length) {

        content.innerHTML = `
            <p class="no-bookings">
                No demo bookings yet. Open a stay and choose
                "Book this stay" to try it out.
            </p>
        `;

        return;

    }

    content.innerHTML = bookings.slice().reverse().map(function (booking) {

        return `

            <div class="booking-list-item">

                <strong>${booking.hotelName}</strong>

                <span>
                    ${booking.checkin} → ${booking.checkout}
                    · ${booking.guests} guest(s)
                </span>

                <span>
                    ${booking.guestName}
                    · ${money(booking.total)}
                </span>

                <span>
                    ${booking.status}
                    · Reference SV${String(booking.id).slice(-7)}
                </span>

                <button data-delete-booking="${booking.id}">
                    Delete demo booking
                </button>

            </div>

        `;

    }).join("");

}


// DELETE A DEMO BOOKING

document.getElementById("myBookingsContent").addEventListener("click", function (event) {

    const button = event.target.closest("[data-delete-booking]");

    if (!button) {
        return;
    }

    bookings = bookings.filter(function (booking) {

        return booking.id !== Number(button.dataset.deleteBooking);

    });

    localStorage.setItem(
        "stayvistaBookings",
        JSON.stringify(bookings)
    );

    renderBookings();

    showToast("Demo booking removed.");

});


// HOME BUTTON

document.querySelector(".brand").addEventListener("click", function (event) {

    event.preventDefault();

    showingFavorites = false;

    searchTerm = "";

    selectedCategory = "All";

    renderHotels();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ADD MY BOOKINGS TO NAVIGATION

const myBookingsLink = document.createElement("a");

myBookingsLink.href = "#";

myBookingsLink.textContent = "My bookings";

myBookingsLink.addEventListener("click", function (event) {

    event.preventDefault();

    renderBookings();

    document.getElementById("myBookingsModal").showModal();

});

document.querySelector(".nav-links").appendChild(myBookingsLink);


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// INITIALIZE WEBSITE

updateFavoriteCount();

renderHotels();