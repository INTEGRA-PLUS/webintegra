export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    // Naranja del logo. Solo como fondo (botones, barras, insignias) y siempre
    // con texto azul marino encima (6.7:1); con texto blanco no se lee (2.3:1).
    COLOR_PRINCIPAL: "#f39323",
    COLOR_SECUNDARIO: "#253d74",
    COLOR_TERCIARIO: "#ffffff",
    // El naranja sobre blanco no llega a contraste legible, así que los textos
    // destacados usan el azul de las letras del logo (7.2:1 sobre blanco).
    COLOR_PRINCIPAL_DEEP: "#2855a0",
    // Amarillo del círculo del logo: solo decorativo, nunca como texto.
    COLOR_ACENTO: "#ecc732",

    // Variantes calibradas para tener excelentes contrastes (Modo oscuro sofisticado)
    COLOR_PRINCIPAL_LIGHT: "#f6a826", // Naranja más claro para hovers y brillos
    COLOR_TERCIARIO_DARK: "#1c2045",  // Azul marino del logo para textos y fondos oscuros
};
