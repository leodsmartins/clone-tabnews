function status(request, response) {
  console.log(response);
  return response.status(200).json({ status: "ok" });
}

export default status;
