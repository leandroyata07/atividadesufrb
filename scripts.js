document.addEventListener("DOMContentLoaded", () => {
    console.log("Script de manipulação do DOM carregado com sucesso!");

    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    const newSkillInput = document.getElementById("new-skill-input");
    const btnAddSkill = document.getElementById("btn-add-skill");
    const skillsList = document.getElementById("lista-habilidades");
    const inputFeedback = document.getElementById("input-feedback");

    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-theme");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }

        themeToggleBtn.addEventListener("click", () => {
            const isDark = body.classList.toggle("dark-theme");

            if (isDark) {
                themeToggleBtn.textContent = "☀️ Modo Claro";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggleBtn.textContent = "🌙 Modo Escuro";
                localStorage.setItem("theme", "light");
            }
        });
    }

    if (btnAddSkill && newSkillInput && skillsList) {

        const addSkill = () => {
            const skillText = newSkillInput.value.trim();

            if (skillText === "") {
                inputFeedback.textContent = "⚠️ Por favor, digite alguma habilidade.";
                inputFeedback.style.color = "#ef4444";
                return;
            }

            const newLi = document.createElement("li");
            newLi.textContent = skillText;

            newLi.addEventListener("click", () => {
                newLi.classList.toggle("skill-highlighted");
            });

            skillsList.appendChild(newLi);

            newSkillInput.value = "";
            inputFeedback.textContent = "✅ Habilidade adicionada com sucesso!";
            inputFeedback.style.color = "#10b981";

            setTimeout(() => {
                inputFeedback.textContent = "";
            }, 2000);
        };

        btnAddSkill.addEventListener("click", addSkill);

        newSkillInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                addSkill();
            }
        });

        newSkillInput.addEventListener("input", () => {
            const length = newSkillInput.value.length;
            if (length > 0) {
                inputFeedback.textContent = `Digitando... (${length}/50 caracteres)`;
                inputFeedback.style.color = "var(--text-muted)";
            } else {
                inputFeedback.textContent = "";
            }
        });

        const skillItems = skillsList.querySelectorAll("li");

        skillItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.classList.toggle("skill-highlighted");
            });
            item.style.cursor = "pointer";
        });
    }
});
