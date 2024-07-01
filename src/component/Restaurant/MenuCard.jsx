import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { categorizeIngredients } from "../Util/categorizeIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";
const styles = {
    x1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    x2: {
        width: '7rem',
        Height: '7rem',
        objectfit: 'cover',

    }
}

const demo = [

    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["beef", "Bacon strips"]
    }
]


const MenuCard = ({ item }) => {
    const [selectedIngredients, setSelectedIngredients] = React.useState([])
    const dispatch = useDispatch();

    const handleCheckBoxChange = (itemName) => {
        console.log("value", itemName)
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(
                selectedIngredients.filter((item) => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }
    const handleAddItemToCart = (e) => {
        e.preventDefault()
        const reqdata = {
            token: localStorage.getItem('jwt'),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCart(reqdata))
        console.log("reqData", reqdata)
    };




    return (
        <div style={{ fontFamily: 'Playfair' }}>
            <Accordion style={{ fontFamily: 'Playfair' }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div style={styles.x1}>
                        <div className="lg:flex  items-center  lg:gap-5">
                            <img style={styles.x2} src=
                                {item.images[0]} alt="" />
                            <div className="space-y-1 lg: space-y-5 lg:max-w-2x1">
                                <p className="font-semibold text-x1">{item.name}</p>
                                <p>₹{item.price}</p>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>

                <AccordionDetails>
                    <form onSubmit={handleAddItemToCart}>
                        <div className="flex gap-5 flex-wrap">
                            {Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                                <div>
                                    <p>{category}</p>
                                    <FormGroup>
                                        {categorizeIngredients(item.ingredients)[category].map((item) => (
                                            <FormControlLabel key={item.id}
                                                control={<Checkbox onChange={() =>
                                                    handleCheckBoxChange(item.name)} />} label={item.name} />
                                        ))}
                                    </FormGroup>
                                </div>
                            ))}
                        </div>

                        <div className="pt=5">
                            <Button variant="contained" disabled={false} type="submit">{true ?
                                "Add to Cart" : "Out Of Stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default MenuCard;