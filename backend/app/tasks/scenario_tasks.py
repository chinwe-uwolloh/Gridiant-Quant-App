from app.tasks.celery_app import celery_app


@celery_app.task(name='app.tasks.scenario_tasks.run_scenario')
def run_scenario(scenario_name: str) -> dict:
    return {'scenario_name': scenario_name, 'status': 'queued'}
