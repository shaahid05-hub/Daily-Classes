let a = [
    { title: "Chicken Biryani", price: "250", rating: "⭐⭐⭐⭐",img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D" },
    { title: "FiredRice", price: "70", rating: "⭐⭐⭐⭐",img: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Maggi", price: "50", rating: "⭐⭐⭐⭐",img: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
    { title: " Mutton Biryani", price: "300", rating: "⭐⭐⭐⭐",img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Chicken Majestic", price: "275", rating: "⭐⭐⭐⭐",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1W5xqVptOMLDVIru4DymVlOBN5SAvn7Vh5ikSote1eZ-oIYdWRvbRMnwIoTrqQ45XZPDf_cV736jlpdLPnjTmXkBgE527nU-1bOFKN54&s=10" }
]

let b = [
    { img: "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" },
    { img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1W5xqVptOMLDVIru4DymVlOBN5SAvn7Vh5ikSote1eZ-oIYdWRvbRMnwIoTrqQ45XZPDf_cV736jlpdLPnjTmXkBgE527nU-1bOFKN54&s=10" }
]

for (let i = 0; i < a.length; i++) {
    document.body.innerHTML += `
        
    <div class="one">
        <div class="parent">
            <div class="front">
                <img src="${a[i].img}" class="image">
            </div>
            <div class="back">
                <img src="${b[i].img}" class="image">
            </div>
        </div>

        <div class="menu">
            <h1>${a[i].title}</h1>
            <h2>${a[i].price}</h2>
            <h2>${a[i].rating}</h2>
        </div>
    </div>
    `

}

