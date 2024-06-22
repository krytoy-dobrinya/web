export function Button() {
    const tap = "tap"
    return <Button onClick={()=>click(tap)}>Custom Button</Button>
}

function click(tap) {
    console.log("click", tap)
}
