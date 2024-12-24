async function fetchData() {
    const apiUrl = "https://api.adviceslip.com/advice";

    try {
      const response = await fetch(apiUrl, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const adviceId = document.querySelector(".advice-id");
      const adviceText = document.querySelector(".advice-text");
      //console.log("API 响应数据:", data);
      adviceId.textContent = `advice #${data.slip.id}`;
      adviceText.textContent = `“${data.slip.advice}”`;
    } catch (error) {
      console.error("请求出错:", error);
    }
  }

  fetchData();
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    fetchData();
  });