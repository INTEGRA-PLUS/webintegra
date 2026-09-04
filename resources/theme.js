export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    COLOR_PRINCIPAL: "#017bbe",
    COLOR_SECUNDARIO: "#252525",
    COLOR_TERCIARIO: "#ffffff",
    COLOR_ACENTO: "#efcd28",       // Amarillo de marca: solo decorativo, nunca como texto

    // Variantes calibradas para tener excelentes contrastes (Modo oscuro sofisticado)
    COLOR_PRINCIPAL_LIGHT: "#0a97e0", // Azul un poco más claro para hovers/brillos
    COLOR_TERCIARIO_DARK: "#171717",  // Negro más profundo para contrastar las tarjetas oscuras
};
