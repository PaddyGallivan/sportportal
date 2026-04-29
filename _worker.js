export default { async fetch(req){ return new Response("CF Pages OK - " + req.url, {headers:{"content-type":"text/plain"}}); }};
