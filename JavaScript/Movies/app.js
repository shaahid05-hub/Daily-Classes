let a = [
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrWTsxUq4KxjQcZ_5XEYEVRS4boC6zrmeWaXaKdxQ2wtLwsx3mdgZXXLpWKwUKlSWCym7Pt6T-LuB02OZH6BfvLYIC594HzehbHjxoL_h&s=10" , name:"They Call Him OG" , boxOffice: "320 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGurlgCbuP6nZqUqVr0oLu3cYPTE8ls8jY4VzwrgwFVbgB8KxlsbR&usqp=CAE&s" , name: "Salaar", boxOffice: "650 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_P13aIahEJJvHFRnJKMArojSiQQihb5jfSRHul1qHjPcXv0n5de-&usqp=CAE&s" , name: "Kalki2898AD", boxOffice: "1150 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8htdK8tPqckNkgA-Z6vHwTBk6EyoDB4DiLxrziS6Unhe916Aw0erv&usqp=CAE&s" , name: "baabubali2", boxOffice: "1810 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM0-VzqPQfPc7zYERtUxrM8T1UxQqjPVC037DKhnoTFHtpXHPDudG&usqp=CAE&s" , name: "Saaho", boxOffice: "450 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qtloVZmm_NJbXA97vsA4tTM7pGFvhVnhqHZMN6VOD-7eRu7M39Lu&usqp=CAE&s" , name: "WAR", boxOffice: "450 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCI5nbqkop9xfI_WOnj5jvyR9jQrjdwYbEbcJg-tWf3hYecxxe3NNj&usqp=CAE&s" , name: "Krish3", boxOffice: "156 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B-Ys-5-KmBW7Z3Jy0rluavIREQejvEv2blCjEH4DUkK_6o1aGXAR&usqp=CAE&s" , name: "Atharintiki Daaredhi", boxOffice: "136 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7xGvVeN4aY0XXhOot6UK2RhlmLAt1tShxOcI1ZMODrWBPR4LwGxU&usqp=CAE&s" , name: "Gabbar Singh", boxOffice: "110 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_K1kSdZXWPwwfuibxFt7kXifOx3XG2VuIadJCym50ljFW1ro8QwL&usqp=CAE&s" , name: "Kushi", boxOffice: "24 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzdYxuxKpRuZibMmevBcnuJvDcIPF2mDuZKFffFIwbUaxgtCQJnGd&usqp=CAE&s" , name: "Dhurandhar", boxOffice: "1250 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5j1ZDMWwE70D2A4yuWS8wky28LI1G4tuS4bg6dinu7p2jwB4HSL5&usqp=CAE&s" , name: "Dangal", boxOffice: "2024 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbv4kYtHbJlNRUHwQlf1EA3A8wpYNn0Y-rv9_QRCKhvnI4uCbdr_7&usqp=CAE&s" , name: "Animal", boxOffice: "919 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrP3_XOdA8-X0KORBoRfjy-zDiAz6MruduFFgufOHHAJ34wMjMQYk2&usqp=CAE&s" , name: "Sprit", boxOffice: "1500 Crore"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQooEgmW96Hlb_ukjfr1YYmr_ZdLW6Oz3lBPOpTgzH2kXD0hvT4yO-W&usqp=CAE&s" , name: "Baahubali", boxOffice: "630 Crore"}
]

let b = [
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7Iah93loIO9sHfjfd09Qu9ZxZNUZ1L1B3HREJ8-WStQgImJhgvTA&usqp=CAE&s", name:"Devara" , boxOffice: "Unknown"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFtD5q43Sp3xe0rNAghmehBL5CIg2MCepMSF3es1E3f-ECVhq-ToY&usqp=CAE&s", name:"RRR" , boxOffice: "1350 Crore"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8KHzO8P-9wCTU2RdQAIn_N_qIHQf3fPdxwtamedv7SjinPNgQu4w&usqp=CAE&s", name:"Rangasthalam" , boxOffice: "215 Crore"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF-TUp7rkuviuXJGR-9w9RmuC7Qn3y4YDVF7nwdPVG9_rgtUE9dCG&usqp=CAE&s", name:"Syeraa" , boxOffice: "250 Crore"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZvPDau3GrI7aMHN3N_NjCqb_3fUATE6PG7RUnBYhpQ_blESOi-S1&usqp=CAE&s", name:"Sankranthiki Vasthunnam" , boxOffice: "285 Crore"}
]

// a = a.concat(b)


for (let i = 0; i < a.length; i++) {
    document.body.innerHTML += `
        <div class="card">
            <div>
                <img src="${a[i].img}" class="image">
            </div>
            <div class="matter">
                <h1>${a[i].name}</h1>
                <h2>${a[i].boxOffice}</h2>
            </div>
        </div> 

    `
    
}






