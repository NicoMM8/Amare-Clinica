/**
 * submit-indexnow.mjs — Notificación automática a Bing & Copilot vía IndexNow
 * 
 * Conforme a Bing Webmaster Guidelines (Directivas 2, 4 y 19):
 * Notifica a los motores de búsqueda (Bing, Copilot, Yandex, Seznam)
 * inmediatamente después de cambios o despliegues.
 */

const HOST = 'terapiadeparejaelsalvador.com';
const KEY = 'e6b9c9e54a3249769850c99a83856638';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/terapia-de-pareja`,
  `https://${HOST}/terapia-individual`,
  `https://${HOST}/sexologia-clinica`,
  `https://${HOST}/salvadorenos-en-el-exterior`,
  `https://${HOST}/diaspora-salvadorena`,
  `https://${HOST}/terapia-salvadorenos-en-el-extranjero`,
  `https://${HOST}/iris-alarcon`,
  `https://${HOST}/sobre-nosotros`,
  `https://${HOST}/precios`,
  `https://${HOST}/test-de-pareja`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/cuando-ir-a-terapia-de-pareja`,
  `https://${HOST}/blog/primera-sesion-terapia-de-pareja`,
  `https://${HOST}/blog/se-puede-perdonar-una-infidelidad-guia-pareja`,
  `https://${HOST}/blog/falta-de-deseo-sexual-en-la-pareja-soluciones`,
  `https://${HOST}/blog/como-afecta-emigrar-a-la-relacion-de-pareja`,
  `https://${HOST}/blog/duelo-migratorio-que-es-como-manejarlo`,
  `https://${HOST}/blog/como-poner-limites-a-tu-familia-desde-la-distancia`,
  `https://${HOST}/blog/crianza-en-pareja-desacuerdos-hijos-soluciones`,
  `https://${HOST}/blog/cuanto-cuesta-una-terapia-de-pareja-en-el-salvador`,
  `https://${HOST}/blog/dependencia-emocional-como-superarla`,
  `https://${HOST}/blog/como-controlar-la-ansiedad`,
  `https://${HOST}/blog/ataques-de-ansiedad`,
  `https://${HOST}/blog/como-elegir-un-psicologo-en-el-salvador`,
  `https://${HOST}/blog/psicologo-o-psiquiatra-diferencias`,
  `https://${HOST}/blog/burnout-o-depresion-diferencias`,
  `https://${HOST}/blog/como-mejorar-la-autoestima-sin-frases-hechas`,
  `https://${HOST}/blog/fortalecer-relacion-pareja-ayuda-profesional`,
  `https://${HOST}/enlaces`,
  `https://${HOST}/privacidad`,
  `https://${HOST}/cookies`
];

async function submitToIndexNow() {
  console.log(`📡 Enviando ${URLS.length} URLs canónicas a IndexNow (Bing / Copilot)...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ IndexNow: ${res.status} OK — Notificación exitosa a Bing y Copilot.`);
    } else {
      console.log(`ℹ️ IndexNow respuesta HTTP: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    console.error('⚠️ Error al conectar con IndexNow:', err.message);
  }
}

submitToIndexNow();
