export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    // Azul petróleo del logo. Lleva texto blanco encima (10:1) y también
    // sirve como color de texto sobre fondo claro.
    COLOR_PRINCIPAL: "#164760",
    COLOR_SECUNDARIO: "#567484",
    COLOR_TERCIARIO: "#ffffff",
    // Mismo azul: se mantiene el token para los textos que lo usan.
    COLOR_PRINCIPAL_DEEP: "#164760",
    // Azul grisáceo claro del logo: solo decorativo, nunca como texto.
    COLOR_ACENTO: "#aabfc9",

    // Variantes calibradas para tener excelentes contrastes (Modo oscuro sofisticado)
    COLOR_PRINCIPAL_LIGHT: "#325768", // Azul medio para hovers y brillos
    COLOR_TERCIARIO_DARK: "#0f2f40",  // Azul petróleo profundo para textos y fondos oscuros
};
