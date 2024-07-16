# Spectrum Dashboard 🚀


Real-time rocket monitoring and control dashboard built with Angular. Track vital telemetry data, switch between REST API and WebSocket for live streaming, and take action on critical status changes.

## 💡 Key Features

* **Live Rocket Telemetry:** Monitor real-time data like velocity, altitude, temperature, and other sensor readings.
* **REST API and WebSocket Support:** Choose between REST API calls or WebSocket for dynamic data updates.
* **Critical Status Notifications:** Receive alerts for important events or anomalies during rocket operation.
* **Actionable Controls:** Interact with the Spectrum system directly from the dashboard using the API endpoint.

## 🛠️ Getting Started

1. **Prerequisites:**
   * Node.js and npm: Ensure you have Node.js and npm installed on your machine.

2. **Installation:**
   ```bash
   git clone [https://github.com/your-username/spectrum-dashboard.git](https://github.com/your-username/spectrum-dashboard.git)
   cd spectrum-dashboard
   npm install


Running the Application:
Bash
ng serve


The dashboard will be available at http://localhost:4200/ in your browser.
🌐 Usage
Access the Dashboard: Open your web browser and navigate to http://localhost:4200/.
View Rocket Status: Monitor real-time data on the main dashboard.
Switch Data Source: Toggle between REST API and WebSocket using the provided controls.
Receive Notifications: Be alerted to critical status changes.
Take Action: Use the "Act on Spectrum" button to interact with the system (requires API integration).
⚙️ Configuration (Optional)
API Endpoint: If you need to customize the API endpoint used for actions or data retrieval, update the configuration settings in the src/environments/environment.ts file.
