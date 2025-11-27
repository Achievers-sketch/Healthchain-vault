import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { integrations } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Zap, ZapOff } from 'lucide-react';

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        title="Integrations"
        subtitle="Connect your health apps and wearables to automate data capture."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <Card key={integration.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-3">
                  <integration.icon
                    className={cn('h-7 w-7', {
                      'text-primary': integration.connected,
                      'text-muted-foreground': !integration.connected,
                    })}
                  />
                  <span>{integration.name}</span>
                </CardTitle>
                <CardDescription className="mt-2">
                  {integration.description}
                </CardDescription>
              </div>
              <Badge
                variant={integration.connected ? 'default' : 'outline'}
                className={
                  integration.connected
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : ''
                }
              >
                {integration.connected ? 'Connected' : 'Not Connected'}
              </Badge>
            </CardHeader>
            <CardFooter className="mt-auto">
              {integration.connected ? (
                <Button variant="destructive" className="w-full">
                  <ZapOff className="mr-2 h-4 w-4" />
                  Disconnect
                </Button>
              ) : (
                <Button variant="default" className="w-full">
                  <Zap className="mr-2 h-4 w-4" />
                  Connect
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
