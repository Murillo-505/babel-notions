function getHealth(request, response) {
  response.json({
    message: "Notions of Babel API funcionando",
    status: "online",
  });
}

module.exports = { getHealth };
