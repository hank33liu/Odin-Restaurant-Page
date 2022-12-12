console.log('home.js is working!')

function component() {
    const about = document.createElement('div');

    
    about.innerHTML = `<div> Since its establishment in 1977, Mama Mia's!!! has consistently impressed Turtleneck Top, Mariana with its 45 years of 2nd Best Pizza awards.Leading a team of passionate young chefs with years of experience in nationally acclaimed restaurants such as Little Caesars and Dominos, head chef Antonio "Hut" Marghereti wanted to bring authentic Italian food to the town of Turtleneck Top.</div >
        <br>
            <div> When he was just three years old, Chef Marghereti made his first Lunchables pepperoni pizza. Amazed by his creation, his parents lifted him up in excitement and yelled "Pizza Time!" Under the tutelage of his great grandmother Mama Luigi and great grandfather Papa John, he learned how better ingredients made better pizza. During his time in the olive gardens, he learned the importance of being with family. With these experiences, Chef Margheriti was determined to share his life lessons and love for food with the humble town of Turtleneck Top, which had only a Costco before.</div>
            <br>
                <div> His promise to our loyal patrons is that as long as he's at the helm, Mama Mia's!!! will continue to deliver nothing but the cutting edge of fine dining.</div>
                <br>
                    <div id="quote">"Nobody out pizzas the Hut."</div>
                    <div id="author">Chef Antonio "Hut" Margheriti</div>`;
    about.id = 'about';

    return about;
}

export default component;