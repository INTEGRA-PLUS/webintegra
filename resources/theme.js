export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    COLOR_PRINCIPAL: "#7fab3c",
    COLOR_SECUNDARIO: "#252525",
    COLOR_TERCIARIO: "#ffffff",

    // Variantes calibradas para tener excelentes contrastes
    COLOR_PRINCIPAL_LIGHT: "#93c24e", // Verde más claro para hovers/brillos
    COLOR_TERCIARIO_DARK: "#171717",  // Negro más profundo para contrastar las tarjetas oscuras
};
