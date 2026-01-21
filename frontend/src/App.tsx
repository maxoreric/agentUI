import { UIRenderer } from './modules/renderer/UIRenderer';
// @ts-ignore - Import JSON plan from parent examples directory
import sprintDashboardPlan from '../../examples/demo_sprint_dashboard.json';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <UIRenderer plan={sprintDashboardPlan as any} />
    </div>
  )
}

export default App
