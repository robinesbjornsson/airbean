export async function getOrders(accountId) {
    try {
      const response = await fetch(`http://localhost:5000/api/order/${accountId}`)
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }