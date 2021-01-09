exports.info = (id, SANZBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${SANZBOT}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${SANZBOT}*
╠════════════════════
║├≽️⚜ *AUTHOR* : _TSANIXY_
║├≽️⚜ *DESIGNER* : _AMPIBI_
║├≽️⚜ *OWNER* : _TSANIANSYAH XY_
╠════════════════════
║  *${SANZBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${SANZBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*TSANIANSYAH XY*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}