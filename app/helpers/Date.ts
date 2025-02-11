export const formatDate = (
    value: string 
) => 
{
    const formattedValue = value.split('-').reverse().join('-')
    
    const timeStamp = new Date(formattedValue)
    const formatter = new Intl.DateTimeFormat("en-US")
    
    return formatter.format(timeStamp)
}