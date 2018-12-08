<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

<html> 
    <body>
        <h2>Horiarios de Plazas en Xalapa</h2>
  <table >
    <tr>
      <th style="text-align:left">Lugar</th>
      <th style="text-align:left">Horario</th>
    </tr>
    <xsl:for-each select="DIRECTORIO/PC">
    <tr>
      <td><xsl:value-of select="LUGAR"/></td>
      <td><xsl:value-of select="HORARIO"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
