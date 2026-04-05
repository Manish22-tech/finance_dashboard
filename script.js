body {
  font-family: Arial;
  margin: 0;
  background: #f4f6f9;
}

header {
  background: #2c3e50;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo i {
  font-size: 22px;
}

.container {
  padding: 20px;
}

.banner img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  gap: 15px;
}

.card {
  background: white;
  padding: 20px;
  flex: 1;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;
}

.card i {
  font-size: 25px;
  margin-bottom: 10px;
  color: #2ecc71;
}

.card:hover {
  transform: scale(1.05);
}

input, select, button {
  margin: 10px 5px;
  padding: 8px;
}

button {
  background: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.empty {
  text-align: center;
  margin-top: 20px;
}

.empty img {
  width: 120px;
  display: none;
}

.insights {
  margin-top: 20px;
  background: white;
  padding: 15px;
  border-radius: 10px;
}
