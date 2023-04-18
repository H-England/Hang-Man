export function helpNotification(setter){
    setter(true)

    setTimeout(() => {
        setter(false)
    }, 2000)
}