import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";


io.on("connect", async () => {
  const connectionsService = new ConnectionsService();

  const allconnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();

  io.emit("admin_list_all_users", allconnectionsWithoutAdmin);
})