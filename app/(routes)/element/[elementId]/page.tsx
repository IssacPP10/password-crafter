import { FormEditElement } from "@/components/Shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ElementPage({ params }: { params: { elementId: string } }) {
  // Se obtiene params de manera correcta usando async
  const { elementId } = await params;  // Esto hace que params sea resuelto correctamente

  
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/")
  }

  const element = await db.element.findUnique({
    where: {
      id: elementId
    }
  })

  if (!element) {
    redirect ("/")
  }
  
  return (
    <div>
      <h1>Element ID: {elementId}</h1> {/* Muestra el elementId en la interfaz */}
      <div>
        <FormEditElement dataElement={element } />
      </div>
    </div>
  );
}
