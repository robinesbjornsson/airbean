
async function getOrders(accountId) {
  
      const response = await fetch(`http://localhost:5000/api/order/${accountId}`)
      return await response.json()
  
}

  export default getOrders