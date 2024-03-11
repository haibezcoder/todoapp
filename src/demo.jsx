const update = () => {
  //   JavaScript
  const element2 = `
      <h3>JavaScript:</h3>
      <form>
        <input type="text"/>
      </form>
      <span>Time: ${new Date().toLocaleTimeString()}</span>
    `;
  document.querySelector("#root").innerHTML = element2;
};

setInterval(update, 1000);
