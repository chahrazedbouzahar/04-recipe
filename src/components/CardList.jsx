import Card from "./Card"

const recipes =[
    {
        id: 1,
        name :"Poke Bowls",
        image :"https://thewoodenskillet.com/wp-content/uploads/2018/02/whole30-poke-bowl-recipe-1-600x600.jpg",
        tag :"Romantic Dinner",
        numberofMinutes :50

    }, 
    {
        id: 2,
        name :"Chocolate Banana Cake",
        image :"",
        tag:"Sweet Tooth",
        numberofMinutes :150

    },
    {
        id: 3,
        name :"Shawarma",
        image :"",
        tag :"Chiken",
        numberofMinutes :60

    },
    {
        id: 4,
        name :"zalabia",
        image :"",
        tag :"Desert",
        numberofMinutes :55

    },
]




export default function CardList () {
    return (
        <section className="cards">
            {recipes.map((recipe)=>
           <Card key={recipe.id} recipe={recipe}
           />
           )}
           
  
</section>


    )
}