import { Server, Socket } from "socket.io";
import ChatServices from "./chat.services";

const connect_socket = async (server: any) => {
  try {
    const io = new Server(server, {
      cors: {
        origin: "*",
      },
    });

    io.on("connection", async (socket: any | Socket) => {
      console.log("Connection Established...........");

      let token_value = socket.handshake.headers.authorization;
      console.log("token -- ", token_value);

      socket.on("join", (payload:any) => {
        socket.join(payload.room);
      });

      socket.on("message", (payload:any) => {
        const { room, message } = payload;
        io.to(room).emit("message", message);
        // socket.emit("msg", message);
      });

      socket.on("create_connection", async (payload: any) => {
        let user_id = await ChatServices.getUserId(token_value);

        let get_connection = await ChatServices.checkConnection(
          user_id,
          payload
        );
        socket.emit("create_connection", { connection_id: get_connection._id });
        socket.join(get_connection._id); //joining room
        socket.emit("join_connection", "Connection Joined");
      });
    });
  } catch (err) {
    console.log("Connection Creating Error");
    throw err;
  }
};

export default connect_socket;
