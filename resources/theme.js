export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    COLOR_PRINCIPAL: "#9fbd36",
    COLOR_SECUNDARIO: "#121212",
    COLOR_TERCIARIO: "#ffffff",

    // Variantes calibradas para tener excelentes contrastes (Modo oscuro sofisticado)
    COLOR_PRINCIPAL_LIGHT: "#abc652", // Verde un poco más claro para hovers/brillos
    COLOR_TERCIARIO_DARK: "#121212",  // Negro profundo para contrastar las tarjetas oscuras
};
