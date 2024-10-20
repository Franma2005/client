const json = {
    number: [parseInt(Math.random() * 10)]
};

(async () => {
    let response = await fetch("http://localhost:3000/number", {method:"POST",
        headers: {
        "Content-Type": "application/json",
        }, body:JSON.stringify(json)});
    
    const resultado = await response.json();
    console.log(resultado);
})();