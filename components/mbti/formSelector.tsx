export function fetchFormData() {
    const mbtiSelected = document.getElementById('mbtiSelected')
    const personnelElement: HTMLInputElement = document.getElementById('personnel')
    const mbtiElements = mbtiSelected.getElementsByTagName('button')
    let mbti = Array.from(mbtiElements).map(x => x.innerText)
    let personnel = parseInt(personnelElement.value)
    return {
        'mbti': mbti,
        'personnel': personnel,
    }
}