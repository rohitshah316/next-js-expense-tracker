import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="mb-4 text-lg font-semibold">
          UI Components
        </h2>

        <div className="space-y-4">
          <Input
            label="Test Input"
            placeholder="Enter something..."
          />

          <div className="flex gap-3">
            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="danger">
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}