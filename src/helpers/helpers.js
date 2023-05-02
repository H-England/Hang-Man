export function showNotification(setter){
    setter(true)

    setTimeout(() => {
        setter(false)
    }, 2000)
}

export function winCheck(correct, wrong, word){
    let status = "win"

    word.split("").forEach(letter => {
        if(!correct.includes(letter)){
            status = ""
        }
    })

    if(wrong.length === 10) status = "lose"
    return status
}