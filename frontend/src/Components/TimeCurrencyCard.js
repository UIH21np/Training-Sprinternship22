import styles from "./TimeCurrencyCard.module.css"


/* 
:currency:
    the current chose currency
:type:
    string
:showData:
    array of bitcoin data object with timestamp and price
:type:
    list[{dict}]
*/
function TimeCurrencyCard ({currency,showData}) {
    // ToDo 10.2.1
    /* 
    set price text color
    :index:
        the index of the current object
    :type:
        int
    :return:
        CSS classname
    :rtype:
        CSS  Object
    */
    const priceColor = (index) => {
        if (index+1 == showData.length){
            return styles.priceContainerEqual
        }
        if(showData[index].price > showData[index+1].price){
            return styles.priceContainerUp
        }
        else if(showData[index].price < showData[index+1].price){
            return styles.priceContainerDown
        }
        else if(showData[index].price == showData[index+1].price){
            return styles.priceContainerEqual
        }
        
    }
    // ToDo 10.2.2
    /* 
    set arrow sign for price
    :index:
        the index of the current object
    :type:
        int
    :return:
        an arrow "↑" "↓" or '-' to show the price change status
    :rtype:
        string
    */
    const arrowSign = (index) => {
        if (index+1 == showData.length){
            return '-'
        }
        if(showData[index].price > showData[index+1].price){
            return "↑"
        }
        else if(showData[index].price < showData[index+1].price){
            return "↓"
        }
        else if(showData[index].price == showData[index+1].price){
            return '-'
        }
    }
    
    // ToDo 10.2.3
    return (
        <>
            {showData.map((d, index) => (
            <div className = {priceColor(index)}> 
                <div className = {styles.cardContainer}>
            <div className={styles.timeContainer}>
            {d.timestamp}
            </div>
            <p></p>
            {currency === 'USD' ? "$" : "€"}
            {d.price}
            {arrowSign(index)}
            </div>
            </div>
            ))}
        </>   
    );
}

export default TimeCurrencyCard;
